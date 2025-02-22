/* TTS_Preview.js is used for previewing Voice Command 's Text-to-Speech service and the option api from the Voice Comand 's setting page. This project is originally made by me (N Paul) (https://github.com/nirmalpaul383).
   You can download source files from my github profile https://github.com/nirmalpaul383 . My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/ FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
   GitHub Page: https://github.com/nirmalpaul383 */


new Function(global("VC_SL"))(); //Importing and evaluating (using the Function constructor (without using the eval() function)) Voice Control Support Library from global variable %VC_SL

const VC_apis = new VCSL(); //For Creation of a new Voice Control Support Library object

let sampleOptions = `This is sample for previewing Voice Command 's Text-to-Speech service and the option api capability.
Select a random option by saying the corresponding option number` //Sample text for TTS Preview

const options = ["Hot/Cold","Day/Night","On/Off","Big/Small","Fast/Slow","Left/Right","Up/Down","Yes/No","Red/Green/Blue","Small/Medium/Large","Happy/Sad", "Old/New",
    "High/Low","Easy/Hard","Light/Dark","Simple/Complex","Quiet/Loud","Clean/Dirty","Full/Empty","Open/Closed","True/False","Morning/Afternoon","Summer/Winter","Digital/Analog",
    "Automatic/Manual"]; //Samples randoms options for Voice Command 's Options API preview

VC_apis.say(sampleOptions); //For saying the sample text
let selectedOptn = VC_apis.options(...options); //For interacting with our random options

VC_apis.say(`You selected the ${selectedOptn} option`); //For saying the selected option
