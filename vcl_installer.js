// VCL stands for Voice-Command-Loader file (naming by me N Paul😊) and can be used to
// share a command with another device 's Voice Command app. This is a VCL Installer
// written in JavaScript and it is used for installing the '.vcl' data to the Voice Commands.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can
// download source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383



//Importing and evaluating (using the Function constructor (without using the eval() function))
// Voice Control Support Library from global variable %VC_SL
new Function(global("VC_SL"))();


const VC_apis = new VCSL(); //For Creation of a new Voice Control Support Library object



// Pre-Installation Confirmation (Open)

// For accessing the actual content of the selected file by accessing the local variable '%temp'
// (which was set by previous action (e.g. readFile action))
let vclData = local("temp");


//Try to parse the vcl data and initialize the installation
try {

    // To check whether the vclData is valid or corrupted. If indexOf() method does not find the
    // appropriate tag it returns -1 (negative one). So if -1 value is return we can activate the
    // condition and throw a custom error message.
    if (vclData.indexOf("<Name>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Opening name tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("</Name>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Closing name tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("<Version>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Opening version tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("</Version>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Closing version tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("<Author>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Opening author tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("</Author>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Closing author tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("<Description>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Opening description tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("</Description>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Closing description tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("<Keywords>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Opening keywords tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("</Keywords>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Closing keywords tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("<Codes><![CDATA[") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Opening codes tag error</P>`);
        throw new Error("This vcl may be corrupted");
    }
    else if (vclData.indexOf("]]></Codes>") === -1) {

        //Set the .vcl data error message for future reference
        setLocal("vcl_installer_status", `<p style='color:red'><b>vcl data error!:</b></p><p> Closing codes tag error</P>`);
        throw new Error("This vcl may be corrupted");
    };


    // To store the opeing name tag (i.e. <name>) position from the VCL data. Position of '<Name>' ,
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

    // To store the opeing author tag (i.e. <Author>) position from the VCL data. Position of '<Author>',
    // but after the <Author> tag so, we need to add its length.
    let op_AuthorPos = vclData.indexOf("<Author>") + "<Author>".length;

    // To store the closing author tag (i.e. </Author>) position from the VCL data. We will use this
    // position as end position, which is already excluded in subString() 's end position parameter.
    let cl_AuthorPos = vclData.indexOf("</Author>");

    // To store the opeing description tag (i.e. <Description>) position from the VCL data. Position of
    // '<Description>' , but after the <Description> tag so, we need to add its length.
    let op_DesPos = vclData.indexOf("<Description>") + "<Description>".length;

    // To store the closing description tag (i.e. </Description>) position from the VCL data. We will
    // use this position as end position, which is already excluded in subString() 's end position parameter.
    let cl_DesPos = vclData.indexOf("</Description>");

    // To store the opeing keywords tag (i.e. <Keywords>) position from the VCL data. Position of
    // '<Keywords>' , but after the <Keywords> tag so, we need to add its length.
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


    //For getting data from each tag of the '.vcl' file and store those as JavaScript variables
    let cmd_temp_name = vclData.substring(op_NamePos, cl_NamePos);
    let cmd_temp_author = vclData.substring(op_AuthorPos, cl_AuthorPos);
    let cmd_temp_version = vclData.substring(op_VerPos, cl_VerPos);
    let cmd_temp_description = vclData.substring(op_DesPos, cl_DesPos);
    let cmd_temp_keywords = vclData.substring(op_KeysPos, cl_KeysPos);
    let cmd_temp_codes = vclData.substring(op_CodesPos, cl_CodesPos);

    //For converting JavaScript 's variable to Tasker 's local variable (for showing on to 'CMD installation screen' scene)
    setLocal("cmd_temp_name", cmd_temp_name);
    setLocal("cmd_temp_author", cmd_temp_author);
    setLocal("cmd_temp_version", cmd_temp_version);
    setLocal("cmd_temp_description", cmd_temp_description);
    setLocal("cmd_temp_keywords", cmd_temp_keywords);
    setLocal("cmd_temp_codes", cmd_temp_codes);

    // Pre-Installation Confirmation (Close)


    //Initiate VCL installation process only if all tags of the vcl data have non-empty content
    if ((cmd_temp_name !== "") && (cmd_temp_author !== "") && (cmd_temp_version !== "") && (cmd_temp_description !== "") && (cmd_temp_keywords !== "") && (cmd_temp_codes !== "")) {

        showScene("CMD installation screen", "DialogDim", 0, 0, false, true); //For showing the CMD installation screen

        //For reading and saving from the 'Installation_agreed' global variable
        let is_Installation_Agreed = global("Installation_agreed");

        //If the user confirm the installation
        if (is_Installation_Agreed === "YES") {

            // Post-Installation Confirmation (Open)

            //Geeting all installed commands into javascript 's array format
            let commands = VC_apis.arrayConverter("Cmd_DB");

            //last defined array position + 1; Or 1 (i.e. 0 + 1) incase of no previous elements in Cmd_DB array.
            let indexed = commands.length + 1;

            //For getting the name of current installable command
            let current_installable_cmd_name = cmd_temp_name;

            //For 'already_installed' checking. The default value is 'false', but it will be overwritten to 'true'
            // if a command with the same name is found in the 'Cmd_DB'
            let is_already_installed = false;

            // For accessing each command element from the commands array
            // If the commands array is empty, this check will be skipped because the 'for...of' loop does not execute
            // on empty arrays and we will have the default 'is_already_installed' value (i.e. false)
            for (eachCommand of commands) {

                // For acessing name string property from previously installed commands (e.g. "Call command by N Paul")
                let each_cmd_name_from_cmd_db = eachCommand.Name;

                // If the current command name matches with a previously installed command, it means the command was
                // already installed, so there's no need to install it again.
                if (each_cmd_name_from_cmd_db === current_installable_cmd_name) {

                    is_already_installed = true; //Set this flag value to true

                    //Set vcl_installer_status for already_installed command 
                    setLocal("vcl_installer_status", `<p style='color:red'> <b>Already Installed!:</b></p><p><p style='color:blue'>${current_installable_cmd_name}</p> is already installed and cannot be re-installed without uninstalling the installed one</P>`);

                    break; //Exit from the loop

                }
            };

            //If the current command is not already installed, it will be installed
            if (is_already_installed === false) {

                // For installing the command
                // For accessing the content of the vcl file from local variable and set it to global
                // variable with indexed value (i.e. array in Tasker)
                setGlobal(`Cmd_DB${indexed}`, local("temp"));

                //For setting the installation successful message
                setLocal("vcl_installer_status", `<p style='color:magenta'> <b>Installed!:</b></p><p><p style='color:blue'>${current_installable_cmd_name}</p> is sucessfully installed and ready to be used</P>`);


            }

            // Post-Installation Confirmation (Close)

        }

        //If the user cancel the installation
        else {
            flash("Installation was cancelled by user...")

            //For setting the installation cancellation message
            setLocal("vcl_installer_status", `<p style='color:blue'><b>Installation Cancelled!</b></p><p>Installation was cancelled by user</P>`);


        }

    }
    else {

        // Show the bad vcl data message
        flash("Bad vcl file or the vcl is corrupted");
    }
    ;
}

//Catch if any error was occured
catch (error) {
    flash(error.message)
}

//This codes block will always executes, regardless of whether an error occurred or not.
finally {
    performTask("Cmd Menu Update"); // For commands list updation
    setGlobal("Installation_agreed", ""); // For resetting 'Installation_agreed' global variable
    showScene("Alert", "DialogDim", 0, 0, false, false); // For showing the Alert scene
}





