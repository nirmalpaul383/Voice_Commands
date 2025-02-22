
<vcl>
 <Name>Repeat Command</Name>
 <Version>v1.0.0</Version>
 <Author>nirmalpaul383</Author>
 <Description>Repeat command: Tests VCSL 's voice input and output functionality. When activated, the command prompts the system to repeat back the user's spoken input, allowing for verification of correct speech recognition and speech playback.</Description>
 <Keywords>repeat, tell the same, audio mirror, say, repeat back, echo, mirror audio, replay</Keywords>
 <Codes><![CDATA[
// Repeat command: Tests VCSL 's voice input and output functionality.
// When activated, the command prompts the system to repeat back the
// user's spoken input, allowing for verification of correct speech
// recognition and speech playback.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

//For getting user queries (user 's raw command) data from the global property VC_OInfos. (e.g. "repeat this is sample text for repeating")
let userQueries = VC_OInfos.userQueries;

//For getting the key value (by which this command is called) from the global property VC_OInfos. (e.g. "repeat")
let matchedKey = VC_OInfos.matchedKey;

//For getting the only repeating text portion from the userQueries string , we subtract matchedKey from the userQueries.
//(e.g. userQueries: "repeat this is sample text for repeating" , then the repeating text: "this is sample text for repeating")
let repeat_text = userQueries.slice(matchedKey.length);

//For removing whitespace from both sides
repeat_text = repeat_text.trim();

VC_apis.say(`You said: ${repeat_text}`); //For saying the output


 ]]></Codes>
</vcl>