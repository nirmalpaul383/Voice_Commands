
<vcl>
  <Name>Call_Cmd</Name>
  <Version>v1.0.0</Version>
  <Author>nirmalpaul383</Author>
  <Description>Call_cmd is a command responsible for calling appropriate phone number with their appropriate name (e.g. "call suresh"). You can use "type" attribute for typing individual letter (e.g. "call type s u r e s h" will be processed as "call suresh")</Description>
  <Keywords>call, contact, phone, make a call</Keywords>
  <Codes><![CDATA[
// Call_cmd is a command responsible for calling appropriate phone number with their appropriate name.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//For Creation of a new Voice Control Support Library object
let VC = new VCSL();

// For getting user queries (user 's raw command) data from the global property VC_OInfos. (e.g. "call Ramesh")
let userQueries = VC_OInfos.userQueries;

// For getting the key value (by which this command is called) from the global property VC_OInfos. (e.g. "call")
let matchedKey = VC_OInfos.matchedKey;

// For getting 'Contacts_DB' value as JavaScript 's variable and convert into a JSON format
let Contacts_DB = JSON.parse(global('Contacts_DB'));

// For getting the only name portion from the userQueries string , we subtract matchedKey from the userQueries.
// (e.g. userQueries: "call ramesh" , then the contactName: "ramesh")
let contactName = userQueries.slice(matchedKey.length);

//For removing whitespace from both sides
contactName = contactName.trim();

contactName = contactName.toLowerCase(); //For converting the contactName into lowercase and store it back

// If the string has an additional sub-command, such as 'type' (which allows typing every letter individually),
// this aditional step is required to refine the 'contactName'
if (userQueries.indexOf('type') !== -1) {

    //For getting the only name portion from contactName (i.e. contactsName string , less.: 'type' )
    contactName = contactName.replace("type", "");
}

let matchedContacts = []; // Will be used for storing matched contact name

for (index in Contacts_DB) {


    // This variable will be used for storing the contact name from the Contact_DB by using their index value.
    // In this case the index value is the key value and will be used for getting number from Contacts_DB (JSON)
    // and we can not modify it , so we store a copy in here
    let nameFromContactsDB = index;


    //This code block will refine the name from contacts DB for better matching by removing some special
    // characters in their name
    {

        nameFromContactsDB = nameFromContactsDB.replaceAll(".", "")
        nameFromContactsDB = nameFromContactsDB.replaceAll("(", "")
        nameFromContactsDB = nameFromContactsDB.replaceAll(")", "")
        nameFromContactsDB = nameFromContactsDB.replaceAll("{", "")
        nameFromContactsDB = nameFromContactsDB.replaceAll("}", "")
        nameFromContactsDB = nameFromContactsDB.replaceAll("[", "")
        nameFromContactsDB = nameFromContactsDB.replaceAll("]", "")
        nameFromContactsDB = nameFromContactsDB.replaceAll("#", "")

        // If the string has an additional sub-command, such as 'type' (which allows typing every letter individually),
        // this aditional step is required to refine the nameFromContactsDB
        if (userQueries.indexOf('type') !== -1) {

            //For ignoring spaces between the individual characters (e.g. 'r a m e s h' -> 'ramesh')
            nameFromContactsDB = nameFromContactsDB.replace(" ", "");
        }
    }

    // This code block will refine the name from user queries for better matching by removing some special
    // characters in their name
    {
        contactName = contactName.replaceAll(".", "")
        contactName = contactName.replaceAll("(", "")
        contactName = contactName.replaceAll(")", "")
        contactName = contactName.replaceAll("{", "")
        contactName = contactName.replaceAll("}", "")
        contactName = contactName.replaceAll("[", "")
        contactName = contactName.replaceAll("]", "")
        contactName = contactName.replaceAll("#", "")

        // If the string has an additional sub-command, such as 'type' (which allows typing every letter
        // individually) , this aditional step is required to refine the contactName
        if (userQueries.indexOf('type') !== -1) {

            // For ignoring spaces between the individual characters (e.g. 'r a m e s h' -> 'ramesh')
            contactName = contactName.replace(" ", "");
        }
    }

    // Will be set to true if the name from the user queries is included in any contact name from the contact DB
    let contactMatchFound = nameFromContactsDB.includes(contactName);

    if (contactMatchFound) {

        // Matching contacts names (actual contact name (with all special characters) from the Contacts_DB
        // will be stored here
        matchedContacts.push(index);
    }
}


// If matched Contacts array have one or more element(s) thats mean its has some matching result.
if (matchedContacts.length > 0) {

    // User will select a contact from the matching results array.
    let selectedContact = VC.options(...matchedContacts);

    // For getting the phone number from the selected contact name
    let phNumberForSelectedContact = Contacts_DB[selectedContact];

    VC.say(`Calling ${selectedContact}`); //For announcing the contact name
    call(phNumberForSelectedContact, true); //Calling the selected contact

}

//If matched Contacts array 's length is 0 thats mean no matching contacts was found.
else {
    VC.say(`Sorry! ${contactName} contact was not found in the contact list`)
};



  ]]></Codes>
</vcl>