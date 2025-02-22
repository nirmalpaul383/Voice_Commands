
<vcl>
  <Name>Call_Back</Name>
  <Version>v1.0.0</Version>
  <Author>nirmalpaul383</Author>
  <Description>Call_Back command can give the name of last dialed or received caller name or number. It can also call back the last caller.</Description>
  <Keywords>last call, last dialed, last received, who had called, callback, dialback, who call</Keywords>
  <Codes><![CDATA[

// Call_Back command can give the name of last dialed or received caller name or number. It can also call back the last caller.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

let lastCallerName_in = global("CNAME"); //For getting the last received caller name
let lastCallerNum_in = global("CNUM"); //For getting the last received caller number
let lastCallerDate_in = global("CDATE"); //For getting the date of last received call
let lastCallerTime_in = global("CTIME"); //For getting the time of last received call

let lastCallerName_out = global("CONAME"); //For getting the last dialed caller name
let lastCallerNum_out = global("CONUM"); //For getting the last dialed caller number
let lastCallerDate_out = global("CODATE"); //For getting the date of last dialed call
let lastCallerTime_out = global("COTIME"); //For getting the time of last dialed call

//If 'lastCallerNum_in' or 'lastCallerNum_out' variable is set only then this function will be executed. 
if ((lastCallerNum_in !== "") || (lastCallerNum_out !== "")) {

    //For formatting the date string into more readable / audible date format and store it back
    lastCallerDate_in = VC_apis.formatDate(lastCallerDate_in);

    //For formatting the date string into more readable / audible date format and store it back
    lastCallerDate_out = VC_apis.formatDate(lastCallerDate_out);

    //For formatting the time string into more readable / audible time format and store it back
    lastCallerTime_in = VC_apis.formatTime(lastCallerTime_in);

    //For formatting the time string into more readable / audible time format and store it back
    lastCallerTime_out = VC_apis.formatTime(lastCallerTime_out);


    //For saying the last received caller / dialed caller information
    VC_apis.say(`Last received call by ${lastCallerName_in} on ${lastCallerDate_in} at ${lastCallerTime_in}.
Last dialed call to ${lastCallerName_out} on ${lastCallerDate_out} at ${lastCallerTime_out}.
Do you want to make a call back?`)


    let Yes_or_No = ["Yes", "No"]; //Available options: 'Yes' or 'No'

    let make_call_bck = VC_apis.options(...Yes_or_No); //For getting the user selected option value

    //If the user select the 'Yes' option only then the call-back is made
    if (make_call_bck === "Yes") {

        //Available options for call back types
        let call_bck_type_optns = [`Last received caller: ${lastCallerName_in}`, `Last dialed caller: ${lastCallerName_out}`];

        let selected_call_bck_type = VC_apis.options(...call_bck_type_optns); //For getting the user selected call back type option value

        //If the user select the last received caller option then the call back is made to the last received caller
        if (selected_call_bck_type === `Last received caller: ${lastCallerName_in}`) {

            VC_apis.say(`Calling ${lastCallerName_in}...`); //For saying the caller name before making the call
            call(lastCallerNum_in, true); //Calling the last received caller number
        }
        else if (selected_call_bck_type === `Last dialed caller: ${lastCallerName_out}`) {

            VC_apis.say(`Calling ${lastCallerName_out}...`); //For saying the caller name before making the call
            call(lastCallerNum_out, true); //Calling the last dialed caller number
        };

    }
    else {
        //Do nothing
    }
}
else {
    let errorMsg = `Error when trying to get the last received / dialed caller information.
May be Voice Commands does not have the appropiate permission to do that or may be there are
no last called or dialed number`
    VC_apis.say(errorMsg); //For saying our error message in case of an error
}


  ]]></Codes>
</vcl>