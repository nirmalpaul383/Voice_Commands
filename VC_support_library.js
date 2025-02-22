// Voice_Commands_support_library (VCSL) is the core component of the Voice Commands system it provides some
// custom interface related functions which helps to simplify the command programming. This
// project is originally made by me (N Paul) (https://github.com/nirmalpaul383).
// You can download source files from my github profile https://github.com/nirmalpaul383 . 
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383

//Class defination for Voice Conmmand Support Library
class VCSL {

    setting = JSON.parse(global('VC_Setting_Properties')); // For getting settings value from global
    // variable "VC_Setting_Properties" and set them as JavaScript object

    additional_settings = JSON.parse(global('VC_Additional_Settings')); // For getting additional
    // settings value from global variable "VC_Additional_Settings" and set them as JavaScript object


    pitch_value = this.setting.pitch_property;  //For getting TTS pitch setting value
    speed_value = this.setting.speed_property;  //For getting TTS speed setting value
    max_options_value = this.setting.max_options_property;  //For getting maximum option setting value
    visual_feedback = this.setting.visual_feedback; //For getting the visual feedback status (either 'on' or 'off')

    // For getting TTS language value. (We have used optional chaining ('?.') for getting voice language property
    // (if voice language property is missing optional chaining ('?.') will return undefined insted of throwing an error))
    voice_language = this.setting?.voice_language;

    stop_key = this.additional_settings.stop_key; //For getting stop key value. This key will be used to
    // stop the options funtion immediately.


    //For storing basic information about this VC_SL
    info = {
        VCSL_Version: "v1.0.0",
        VCSL_Author: "nirmalpaul383 (N Paul)",
        VCSL_Author_Github: "https://github.com/nirmalpaul383"
    }


    //For visually output message
    customToast(toastMsg) {

        //For showing the Custom Toast scene
        showScene("Custom Toast", "Dialog", 0, 0, false, false);

        //For writing the toastMsg to the text element of Custom Toast scene
        elemText("Custom Toast", "Text For Custom Toast", "repl", toastMsg)

        //For waiting for 2 second
        wait(2000);

        //For destroying the Custom Toast scene
        destroyScene("Custom Toast");

    }

    // performTaskWait() allows to run a Tasker task and wait for its completion. Unlike native
    // performTask(), which executes a Tasker task from JavaScript without waiting, performTaskWait()
    // ensures the task is finished before proceeding.
    performTaskWait(taskName, checkingInterval = 500, maxWait = 30000) {

        // Maximum wait time in milliseconds. If this timeout is exceeded, the function will
        // stop waiting and continue executing the next code (except for 0 timeout). There
        // are two types of values for max_timeout: (a) 0: Waits indefinitely until the task
        // is completed. (b) Non-zero value: Waits for a maximum of the specified time (in ms).
        let max_timeout = maxWait;


        // In which interval should the check to be done to see if the task has finished or not.
        // Increasing the interval period reduces system resource usage, while decreasing the
        // interval period increases system resource usage.
        let checking_interval = checkingInterval;

        let total_elapsed_time = 0; //Will be used to store total elapsed Time for Non-zero max_timeout.

        //Run the custom Tasker 's task
        performTask(taskName, 150, "", "", "", false, false, "", true);

        //Initializing the running status of the task
        let runningStatus = taskRunning(taskName)


        //max_timeout: 0 will be used for Waiting indefinitely until the task is completed.
        if (max_timeout === 0) {

            while (runningStatus === true) {

                //Wait for the interval preiod before checking again
                wait(checking_interval);

                //For checking whether the task is currently running or not
                runningStatus = taskRunning(taskName)
            }

        }
        //max_timeout: Non-Zero value (e.g. 500 ms) will be used for Waiting for a maximum of
        // the specified time frame.
        else if (max_timeout > 0) {

            //The loop will continue as long as the "total_elapsed_time" is less than "max_timeout",
            // and the task is still running.
            while ((total_elapsed_time < max_timeout) && (runningStatus === true)) {

                //Wait for the interval preiod before checking again
                wait(checking_interval);

                //Set the total_elapsed_time value
                total_elapsed_time = total_elapsed_time + checking_interval;

                //For checking whether the task is currently running or not
                runningStatus = taskRunning(taskName)
            }

        };

    }

    //For saying output
    say(text, engine = undefined, voice = undefined) {

        let pitch = this.pitch_value;
        let speed = this.speed_value;
        let vf_status = this.visual_feedback;
        let language = this.voice_language;

        if (vf_status === 'on') {

            this.customToast(`<b>Voice Commands:</b> ${text}`)
            //For visually output the text on our custom toast msg
        }

        say(text, engine, language, 'media', pitch, speed);

    }

    //For getting voice input and return matched text
    getVoice() {

        let vf_status = this.visual_feedback;

        //For clearing the global variable: %Result_Get_Voice
        setGlobal("Result_Get_Voice", "")

        //For calling our 'Get Voice Custom' task and wait for it to be completed.
        this.performTaskWait("Get Voice Custom", 500, 0);

        //For getting the value from global variable: %Result_Get_Voice
        let Result_Get_Voice = global("Result_Get_Voice");

        //If Result_Get_Voice is a empty string that means GetVoice function does not store any value to it
        if (Result_Get_Voice === "") {

            this.say('Error while getting voice please try again'); //For saying custom error message

            if (vf_status === 'on') {

                this.customToast(`Error while getting voice`)
                //For visually output the error to our custom toast msg
            }

            throw new Error("Error while getting voice"); //Throw a new error and stop any further execution

        }
        else {

            if (vf_status === 'on') {

                //For visually output the user inputted voice on our custom toast msg
                this.customToast(`<b>User:</b> ${Result_Get_Voice}`)

            }

            //For clearing the global variable: %Result_Get_Voice
            setGlobal("Result_Get_Voice", "")

            //For returning the matching texts
            return Result_Get_Voice;

        }


    }


    //For providing Voice Commands 's options interface
    options(...alternatives) {

        let max_alts_in_each_lst = this.max_options_value;

        if (alternatives.length > 0) {

            this.say(`There are ${alternatives.length} options`);

            //If the max_alts_in_each_lst variable is not set, it will be set to 5 as its default value
            if (typeof (max_alts_in_each_lst) != 'number') {
                max_alts_in_each_lst = 5;
            }

            let temp = ``; //To be used for tempory storing current set / list of options menu     
            let opening_frame_index = 0; //To be used for selecting part of array from the main alternatives
            let closing_frame_index = 0; //To be used for selecting part of array from the main alternatives
            let part_of_alternatives = [] //To be used for storing part of array from the main alternatives

            let selectedAlternative = '0' //To be used for storing selected alternative / option 's number.

            //As long as the closing_frame_index is less than the alternatives.length , this loop continues
            while (closing_frame_index < alternatives.length) {

                // Set the maximum avalible closing frame index with respect to max_alts_in_each_lst value
                closing_frame_index = opening_frame_index + Math.min(max_alts_in_each_lst, (alternatives.length - closing_frame_index))

                // For storing part of array from the main alternatives
                part_of_alternatives = alternatives.slice(opening_frame_index, (closing_frame_index));

                //After storing current set of options, we need to store some extra options for the users (i.e next , previous, repeat etc...)
                //'next set of options' will be only available when there is realy next sets of options are available
                if (closing_frame_index < alternatives.length) {
                    part_of_alternatives.push(`go to next set of options`)
                }
                //'previous set of options' will be only available when there is realy previous sets of options are available
                if (opening_frame_index > 0) {
                    part_of_alternatives.push(`go to previous set of options`)
                }
                //'repeat' will be available all the time
                {
                    part_of_alternatives.push('repeating the list')
                }

                //For temporary storing current set (from opening frame to closing frame) of options (alternatives)
                for (let index in part_of_alternatives) {
                    temp += `Option ${Number(index) + 1} for ${part_of_alternatives[index]}.
`;
                }

                //For saying list of options (temp) + the execution stop key (this.stop_key)
                this.say(`${temp} . ${this.stop_key} for cancellation`);


                let tryAgain = true;
                //For getting option number from the user. It will try again and agin until a valid option number is found.
                while (tryAgain === true) {
                    selectedAlternative = this.getVoice(); //For asking and storing the input from the user voice

                    //For converting all letters into lower case for better matching
                    selectedAlternative = selectedAlternative.toLowerCase();

                    //For setting the selected alternative value in to number if there is any common string value
                    if ((selectedAlternative === 'option one') || (selectedAlternative === 'option 1')) {
                        selectedAlternative = 1;
                    }
                    else if ((selectedAlternative === 'option two') || (selectedAlternative === 'option 2')) {
                        selectedAlternative = 2;
                    }
                    else if ((selectedAlternative === 'option three') || (selectedAlternative === 'option 3')) {
                        selectedAlternative = 3;
                    }
                    else if ((selectedAlternative === 'option four') || (selectedAlternative === 'option 4')) {
                        selectedAlternative = 4;
                    }
                    else if ((selectedAlternative === 'option five') || (selectedAlternative === 'option 5')) {
                        selectedAlternative = 5;
                    }
                    else if ((selectedAlternative === 'option six') || (selectedAlternative === 'option 6')) {
                        selectedAlternative = 6;
                    }
                    else if ((selectedAlternative === 'option seven') || (selectedAlternative === 'option 7')) {
                        selectedAlternative = 7;
                    }
                    else if ((selectedAlternative == 'option eight') || (selectedAlternative === 'option 8')) {
                        selectedAlternative = 8;
                    }
                    else if ((selectedAlternative === 'option nine') || (selectedAlternative === 'option 9')) {
                        selectedAlternative = 9;
                    }
                    else if ((selectedAlternative === 'option ten') || (selectedAlternative === 'option 10')) {
                        selectedAlternative = 10;
                    }
                    else if ((selectedAlternative === 'option eleven') || (selectedAlternative === 'option 11')) {
                        selectedAlternative = 11;
                    }
                    else if ((selectedAlternative === 'option twelve') || (selectedAlternative === 'option 12')) {
                        selectedAlternative = 12;
                    }
                    else if ((selectedAlternative === 'option thirteen') || (selectedAlternative === 'option 13')) {
                        selectedAlternative = 13;
                    }
                    else if ((selectedAlternative === 'option fourteen') || (selectedAlternative === 'option 14')) {
                        selectedAlternative = 14;
                    }
                    else if ((selectedAlternative === 'option fifteen') || (selectedAlternative === 'option 15')) {
                        selectedAlternative = 15;
                    }
                    else if ((selectedAlternative === 'option sixteen') || (selectedAlternative === 'option 16')) {
                        selectedAlternative = 16;
                    }
                    else if ((selectedAlternative === 'option seventeen') || (selectedAlternative === 'option 17')) {
                        selectedAlternative = 17;
                    }
                    else if ((selectedAlternative === 'option eighteen') || (selectedAlternative === 'option 18')) {
                        selectedAlternative = 18;
                    }
                    else if ((selectedAlternative === 'option nineteen') || (selectedAlternative === 'option 19')) {
                        selectedAlternative = 19;
                    }
                    else if ((selectedAlternative === 'option twenty') || (selectedAlternative === 'option 20')) {
                        selectedAlternative = 20;
                    }

                    else if (selectedAlternative === this.stop_key) {
                        //For stoping the options function immediately
                        this.say('You have selected the cancel option. Execution will be cancelled.');
                        throw new Error('Cancelled');

                    }

                    else {
                        //For converting sring value into number value (e.g. "6" into 6)
                        selectedAlternative = Number(selectedAlternative);
                    };

                    //If not convertible to a valid number, then we must try again
                    if ((isNaN(selectedAlternative)) || (selectedAlternative === 0)) {
                        this.say('Please select a valid option in number');
                        tryAgain = true; //For looping again

                    }

                    //If convertible to a valid number
                    else {
                        //If selected option number is within the range of part of alternatives, than it must be a valid option
                        if (selectedAlternative <= part_of_alternatives.length) {
                            tryAgain = false; //For stopting the loop

                            //for tempory storing the output value according to the option list.
                            let outputTemp = part_of_alternatives[selectedAlternative - 1];
                            if (outputTemp === 'go to next set of options') {
                                opening_frame_index = closing_frame_index; //For going to next set of option
                            }
                            else if (outputTemp === 'go to previous set of options') {

                                //Set the maximum avalible opeing frame index with respect to max_alts_in_each_lst value
                                opening_frame_index = opening_frame_index - Math.min(max_alts_in_each_lst, opening_frame_index)
                            }
                            else if (outputTemp === 'repeating the list') {
                                //Do nothing for repeating the list
                            }
                            else {
                                return outputTemp; //For returning the output
                            }

                        }
                        //If slected option number is outside of the range of part of alternatives, than we must try again
                        else {
                            this.say('Please select a option from the option list range');
                            tryAgain = true; //For looping again
                        }
                    }
                }
                temp = ``; //For resetting the temp value
            }
        }
    }

    //For Converting Tasker 's array into JavaScript 's array format
    arrayConverter(tasker_Array = "") {

        let converted_JS_Array = [] //For storing converted array
        let counter = 1; //As Tasker's array starts with index 1 (instead of 0)
        let eachCmd = global(`${tasker_Array}${counter}`); //Accessing 1st element of tasker_Array array

        let temp_Objectify_element = {}; //Will be used for temporary store Objectify data of each element

        // This loop will continue until eachCmd is a blank string (as in Tasker any undefined variable
        // will return an empty string from its JavaScript interface).
        while (eachCmd !== "") {

            //For converting String format into JS Object format and stores its temporary
            temp_Objectify_element = this.vclParser(eachCmd);

            //Store the Objectify element into the end of converted_JS_Array
            converted_JS_Array.push(temp_Objectify_element);

            counter += 1; //Incrementing counter by 1, for accessing next element

            eachCmd = global(`${tasker_Array}${counter}`); //Accessing next element of tasker_Array array

        }

        return converted_JS_Array; //Returns the converted array into JavaScript 's format
    }

    //For converting vcl data into JS object
    vclParser(vclData) {

        // To check whether the vclData is valid or corrupted. If indexOf() method does not find the
        // appropriate tag it returns -1 (negative one). So if -1 value is return we can activate the
        // condition and throw a custom error message.
        if (vclData.indexOf("<Name>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Opening name tag error");
            flash("command data error: Opening name tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Opening name tag error");
        }
        else if (vclData.indexOf("</Name>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Closing name tag error");
            flash("command data error: Closing name tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Closing name tag error");
        }
        else if (vclData.indexOf("<Version>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Opening version tag error");
            flash("command data error: Opening version tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Opening version tag error");
        }
        else if (vclData.indexOf("</Version>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Closing version tag error");
            flash("command data error: Closing version tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Closing version tag error");
        }
        else if (vclData.indexOf("<Author>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Opening author tag error");
            flash("command data error: Opening author tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Opening author tag error");
        }
        else if (vclData.indexOf("</Author>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Closing author tag error");
            flash("command data error: Closing author tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Closing author tag error");
        }
        else if (vclData.indexOf("<Description>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Opening description tag error");
            flash("command data error: Opening description tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Opening description tag error");
        }
        else if (vclData.indexOf("</Description>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Closing description tag error");
            flash("command data error: Closing description tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Closing description tag error");
        }
        else if (vclData.indexOf("<Keywords>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Opening keywords tag error");
            flash("command data error: Opening keywords tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Opening keywords tag error");
        }
        else if (vclData.indexOf("</Keywords>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Closing keywords tag error");
            flash("command data error: Closing keywords tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Closing keywords tag error");
        }
        else if (vclData.indexOf("<Codes><![CDATA[") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Opening codes tag error");
            flash("command data error: Opening codes tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Opening codes tag error");
        }
        else if (vclData.indexOf("]]></Codes>") === -1) {
            this.say("The command may be corrupted, you need to reinstall the command. command data error: Closing codes tag error");
            flash("command data error: Closing codes tag error");
            throw new Error("The command may be corrupted, you need to reinstall the command. command data error: Closing codes tag error");
        };

        //This object will be used for storing the parsed data from the vcl
        let vclObjectify = {};

        // To store the opeing name tag (i.e. <name>) position from the VCL data. Position of '<Name>',
        // but after the <Name> tag so, we need to add its length.
        let op_NamePos = vclData.indexOf("<Name>") + "<Name>".length;

        // To store the closing name tag (i.e. </name>) position from the VCL data. We will use this
        // position as end position, which is already excluded in subString() 's end position parameter.
        let cl_NamePos = vclData.indexOf("</Name>");

        // To store the opening version tag (i.e. <Version>) position from the VCL data. Position of
        // '<Version>' , but after the <Version> tag so, we need to add its length.
        let op_VerPos = vclData.indexOf("<Version>") + "<Version>".length;

        // To store the closing version tag (i.e. </Version>) position from the VCL data. We will use
        // this position as end position, which is already excluded in subString() 's end position parameter.
        let cl_VerPos = vclData.indexOf("</Version>");

        // To store the opeing author tag (i.e. <Author>) position from the VCL data. Position of '<Author>' ,
        // but after the <Author> tag so, we need to add its length.
        let op_AuthorPos = vclData.indexOf("<Author>") + "<Author>".length;

        // To store the closing author tag (i.e. </Author>) position from the VCL data. We will use this position
        // as end position, which is already excluded in subString() 's end position parameter.
        let cl_AuthorPos = vclData.indexOf("</Author>");

        // To store the opeing description tag (i.e. <Description>) position from the VCL data. Position of
        // '<Description>' , but after the <Description> tag so, we need to add its length.
        let op_DesPos = vclData.indexOf("<Description>") + "<Description>".length;

        // To store the closing description tag (i.e. </Description>) position from the VCL data. We will use
        // this position as end position, which is already excluded in subString() 's end position parameter.
        let cl_DesPos = vclData.indexOf("</Description>");

        // To store the opeing keywords tag (i.e. <Keywords>) position from the VCL data. Position of '<Keywords>',
        // but after the <Keywords> tag so, we need to add its length.
        let op_KeysPos = vclData.indexOf("<Keywords>") + "<Keywords>".length;

        // To store the closing keywords tag (i.e. </Keywords>) position from the VCL data. We will use this
        // position as end position, which is already excluded in subString() 's end position parameter.
        let cl_KeysPos = vclData.indexOf("</Keywords>");

        // To store the opeing codes tag (i.e. <Codes><![CDATA[) position from the VCL data. Position of
        // '<Codes><![CDATA[' , but after the <Codes><![CDATA[ tag so, we need to add its length.
        let op_CodesPos = vclData.indexOf("<Codes><![CDATA[") + "<Codes><![CDATA[".length;

        // To store the closing codes tag (i.e. ]]></Codes>) position from the VCL data. We will use this position
        // as end position, which is already excluded in subString() 's end position parameter.
        let cl_CodesPos = vclData.indexOf("]]></Codes>");

        //Placing each data to each element of the vclObectify object
        vclObjectify = {
            Name: vclData.substring(op_NamePos, cl_NamePos),
            Version: vclData.substring(op_VerPos, cl_VerPos),
            Author: vclData.substring(op_AuthorPos, cl_AuthorPos),
            Description: vclData.substring(op_DesPos, cl_DesPos),
            Keywords: vclData.substring(op_KeysPos, cl_KeysPos),
            Codes: vclData.substring(op_CodesPos, cl_CodesPos),
        }

        return vclObjectify; //Return the vclObjectify object


    }

    //For formatting default date string format (e.g. 10-02-2025) into more
    //readable / audible date format (e.g 10 February 2025)
    formatDate(dateStr) {

        //For spliting the date string with '-' and storing it into day_mnt_year_arr array
        //e.g day_mnt_year_arr = ["10", "02", "2025"]
        let day_mnt_year_arr = dateStr.split('-');

        //List of months
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        //For returning the formatted date string.
        return `${day_mnt_year_arr[0]} ${months[parseInt(day_mnt_year_arr[1]) - 1]} ${day_mnt_year_arr[2]}`;
    }

    //For formatting the default time string format (e.g. 17.45) into more
    //readable / audible time format (e.g 5:45 PM)
    formatTime(timeStr) {

        //For spliting the time string with '.' and storing it into hour_min_arr array
        //e.g hour_min_arr = ["17","45"]
        let hour_min_arr = timeStr.split(".");

        if (hour_min_arr[0] > 12) {
            return `${hour_min_arr[0] - 12}:${hour_min_arr[1]} PM`;
        }
        else if (hour_min_arr[0] == 12) {
            return `${hour_min_arr[0]}:${hour_min_arr[1]} PM`;
        }
        else if (hour_min_arr[0] == 12) {
            return `${hour_min_arr[0]}:${hour_min_arr[1]} AM`;
        }

    }




};

// For attaching VCSL class to the globalThis object 's as VCSL property
globalThis.VCSL = VCSL;




