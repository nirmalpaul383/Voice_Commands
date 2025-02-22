
<vcl>
  <Name>VC_Engine</Name>
  <Version>v1.0.0</Version>
  <Author>nirmalpaul383</Author>
  <Description>VC_engine is a launcher type command responsible for calling appropriate commands with their appropriate keywords and execute them for the user.</Description>
  <Keywords>[works with Assistant Listener Service Event and doesn't has any keys]</Keywords>
  <Codes><![CDATA[
    
// VC_engine is a launcher type command responsible for calling appropriate commands with
// their appropriate keywords and execute them for the user. This project is originally made
// by me (N Paul) (https://github.com/nirmalpaul383). You can download source files from my
// github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//Importing and evaluating (using the Function constructor (without using the eval() function))
//Voice Control Support Library from global variable %VC_SL
new Function(global("VC_SL"))();

const VC_apis = new VCSL(); //For Creation of a new Voice Control Support Library object
let commands = VC_apis.arrayConverter("Cmd_DB"); //Geeting all installed commands into javascript's array format

//For telling the user that the voice command 's listing is started
VC_apis.say("Listening...")

//For getting user voice command into userQueries variable (e.g. user: "  Note this data is to be noted   ").
let userQueries = VC_apis.getVoice();

//For removing whitespace from the userQueries and store it back to the userQueries
//(e.g. "Note this data is to be noted").
userQueries = userQueries.trim();


//For converting the userQueries into lowercase and store it to the tempQueries
//(in this example "note this data is to be noted")
let tempQueries = userQueries.toLowerCase();


let cmdCodes = ``; //Will be used for storing codes from command (if any matching keywoard found)
let matchedKey = ``; //Will be used for storing the matched keyword (if any matching keywoard found)

//For accessing each command element from the commands array
for (eachCommand of commands) {

    //For acessing keywords string property from each command (e.g. " nOte , notEpad, Write,writepaD")
    let eachCmdKeys = eachCommand.Keywords;

    //For converting String to Array with the "," spliter and store it back to the eachCmdKeys (e.g. [" nOte "," notEpad"," Write","writepaD"])
    eachCmdKeys = eachCmdKeys.split(",");

    //If any maching is found then this varibale will be used for breaking the outer loop
    let breakOuterLoop = false;

    for (index in eachCmdKeys) {

        //For removing whitespace from each keys and store it back to its previous index position in the
        // eachCmdKeys array (e.g. "nOte" , "notEpad" , "Write" , "writepaD")
        eachCmdKeys[index] = eachCmdKeys[index].trim();

        //For converting each keys into lowercase and store it back to its previous index position in the
        //eachCmdKeys array (e.g. "note" , "notepad" , "write" , "writepad")
        eachCmdKeys[index] = eachCmdKeys[index].toLowerCase();


        //For checking if the keyword of the command is in the user queries or not
        let isKeyWordMatch = tempQueries.startsWith(eachCmdKeys[index]);

        if (isKeyWordMatch) {

            //For acessing codes property from each command (e.g. "console.log("hello world")")
            cmdCodes = eachCommand.Codes;

            matchedKey = eachCmdKeys[index]; //For storing the matched key for future reference

            breakOuterLoop = true; //Will be used for breaking the outer loop

            break; //Break this inner loop
        }
    }
    if (breakOuterLoop === true) {
        break; //Break this outer loop
    }


}

//If matched Key value was set thats mean matched key was found. Only then the appropiate
//command 's codes will be executed
if (matchedKey) {

    //For attaching Other Information to the globalThis object 's as property
    globalThis.VC_OInfos = { "userQueries": userQueries, "matchedKey": matchedKey };

    //Try to execute the appropriate commands code , if it is possible then it will try to
    //execute it otherwise say the the error message
    try {

        new Function(cmdCodes)(); //For evaluating codes from matching command
    }
    catch (error) {


        if (error.message === "Cancelled") {
            //If the error message is "Cancelled" that means the cancelled alternative was
            //selected by the user. No further action is necessary.
        }
        else {
            VC_apis.say(`Code error: Error: ${error.message}`); //For saying the error message

            flash(`${error.message}`); //For flashing the error message
        }
    }
}

//If matched Key value was NOT SET thats mean matched key was not found.
else {
    VC_apis.say("Voice Command does not have the appropriate command to do that")
};

  ]]></Codes>
</vcl>