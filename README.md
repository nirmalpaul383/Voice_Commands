# Voice_Commands
A customizable Voice Assistant that supports installable custom commands/functions via Voice Command Loader (.vcl) files. Users can extend its functionality by creating their own commands using JavaScript and distributing them through .vcl files.

## Features
1. **Custom Installable Commands:**  Install your custom commands through .vcl files or manual code typing directly from the app's interface, allowing for endless possibilities.
2. **Command Uninstallation:** Easily uninstall the unnecessary commands directly from the app's interface, keeping your voice assistant organized and mess-free.
3. **JavaScript Support:** You can create custom commands using native JavaScript and using [Tasker's JavaScript interface](https://tasker.joaoapps.com/userguide/en/javascript.html) for seamless command developments.
4. **Cross-Platform Development:** You can develop commands on desktop or directly on the smartphone using code editors.
5. **VCL Exporter Tool:** Export your command code into .vcl files using the built-in VCL Exporter tool for smoothing the development process.
6. **Custom .VCL Installer:** By default it has Voice-Command-Loader (.vcl) installer written by me (N Paul), but you can use your own .vcl installers for command installation and management.
7. **VCSL (Voice Commands Support Library):** You can use VCSL's custom interface-related functions to simplify command programming and enhance the command development efficiency.
8. **Custom VCSL (Voice Commands Support Library) Support:** By default it has VCSL written by me (N Paul), but you can use your own VCSL implementations to further extend the platform's capabilities.
9. **Custom Keywords:** You can change the keywords for launching commands, making voice interactions more personalized.
10. **Custom Command Launcher:** By default, it uses **VC_Engine command** launcher developed by me (N Paul) to execute other commands. However, you can replace this with your own command launcher if needed.
11. **Multi-Event Triggering:** Execute commands based on various events
    + **Assistant Listener Service Event:** Execute your assigned commands (by default **VC_Engine command**) when assistant request event was occured.
    + **Phone Ringing Listener Service Event:** Execute your assigned commands (by default **Phone Ringing command**) when a phone call is ongoing.
    + **Missed Call Listener Service Event:** Execute your assigned commands (by default **Missed Call command**) when a missed call is detected.
12. **Cancel Keywords:** Cancel command execution using predefined cancel keywords, ensuring seamless voice interactions.
13. **Custom Cancel Keywords:** Define custom cancel keywords to align with your specific needs and preferences.
14. **TTS Customization:** Personalize your Voice Commands experience by changing the Text-to-Speech (TTS) settings.
15. **Built-in Commands:** Voice Commands has <ins>15 built-in commands</ins>, including:
    + **VC_Engine:** Launch another commands using appropriate keywords.
    + **Clock & Calendar Command:** Retrieve current time and date information.
    + **Calculator Command:** Evaluate simple math expressions.
    + **Call_Cmd:** Initiate calls to specific phone numbers using voice commands.
    + **Auto Call Pickup:** Automatically pick up incoming calls.
    + **Auto Call Terminate:** Automatically terminate incoming calls.
    + **Call_Back:** Retrieve information about the last dialed or received caller and initiate a call back.
    + **Phone Ringing Command:** Retrieve information about incoming calls.
    + **Missed Call Command:** Retrieve information about missed calls.
    + **Repeat Command:** Test voice input and output functionality.
    + **Wikipedia Command:** Retrieve information from [Wikipedia](https://www.wikipedia.org/) using voice commands.
    + **VCSL_Info:** Retrieve information about the installed Voice Commands Support Library.
    + **Battery Command:** Retrieve battery level information.
    + **Bluetooth Battery Command:** Retrieve battery level information for connected Bluetooth devices.
    + **Random Fact Command:** Retrieve random facts from [uselessfacts API](https://uselessfacts.jsph.pl/).

## Screenshots
**Here are some screenshots:**
| Icon  | Voice Commands initialising | Uninstalling a command |
| ------------- | ------------- | ------------- |
| ![Voice Commands Icon:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Icon/Voice%20Commands%20logo.png)  | ![Voice Commands initialising:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%201.jpg)  | **Hold a command for unistalling:** ![Command Uninstalling:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%203.jpg)  |

| Installation of command from .vcl file  | Command Installation (manual) | Installation Successful| Command 's keyword(s) editing  |
| ------------- | ------------- | ------------- | ------------- |
| **Select a valid .vcl file from file browser:** ![Command Installation from .vcl file:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%205.jpg)  |  ![Command Installation (manual):](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%205A.jpg) | ![Installation Successful:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%206.jpg)  | **Tap a command for editing its keyword(s):** ![Command Installation from .vcl file:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%207.jpg)  | 

| Settings | Advance Settings |
| ------------- | ------------- |
| ![Voice Commands Settings:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%208.jpg)  | ![Voice Commands Advance Settings:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%2011.jpg)  |

| Using: Calculator Command | Using: Wikipedia Command |
| ------------- | ------------- |
| ![Voice Commands Calculator Command:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%209.gif)  | ![Voice Commands Wikipedia Command:](https://raw.githubusercontent.com/nirmalpaul383/Voice_Commands/refs/heads/main/Screenshots/File%2010.gif)  |

## About Source Project
This application is made with [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm) and with [Tasker app factory](https://play.google.com/store/apps/details?id=net.dinglisch.android.appfactory). To install and run the **Voice Commands** (apk format) you will not need any of these applications. However, if you want to <ins>view</ins> , <ins>modify</ins> or <ins>directly run the source project file</ins> you will need Tasker application and if you want to export your own modification then you will need both [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm) and its extension app [Tasker app factory](https://play.google.com/store/apps/details?id=net.dinglisch.android.appfactory).

## Installation and Usage
**You can run Voice Commands using two methods:**
1. **Method 1: Android App (apk) Installation:**
    + Download the Voice Commands APK file.
    + Install the APK file on your Android device. (If you encounter issues during installation, use a 3rd-party app installer tool like SAI Split APKs Installer to install the APK file)
    + Launch the Voice Commands app

2. **Method 2: Directly run the project in Tasker:**
    + Install the [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm) app from the Google Play Store.
    + Download the Voice Commands project file (Source Project/Voice_Commands.prj.xml)
    + Import the project file into Tasker.
    + Run the **Launcher** task from Tasker.

## Command Developments
You can develop your own commands using JavaScript and using [Tasker's JavaScript interface](https://tasker.joaoapps.com/userguide/en/javascript.html).
To create your own Command, follow these steps:
1. **Write your codes:** Use any code editor to write the JavaScript code for your command.
2. **Copy the code:** Copy the entire JavaScript code from the code editor.
3. **Use VCL Exporter:** Open **VCL_Exporter.html** (Tools/VCL_Exporter.html) in browser (recommended browser is chrome) and paste the copied code.
4. **Export as .vcl file:** Use the tool to wrap the JavaScript code into a Voice Command Loader (.vcl) file.


### Create a new Voice Command Support Library object
To create a new Voice Command Support Library object use **`new VCSL()`** keywords
```javascript
// For Creation of a new Voice Command Support Library object
const VC_apis = new VCSL();
```


### For getting raw user queries data
For getting raw user queries data use **`userQueries`** property of the `VC_OInfos` global object
```javascript
// For getting user queries (user 's raw command such as "calculate 4585 + 4565") data from the global property VC_OInfos.
let userQueries = VC_OInfos.userQueries;
```


### For getting the matching keyword value from the raw user queries data
For getting the matching keyword value from the raw user queries data use **`matchedKey`** property of the `VC_OInfos` global object
```javascript
// For getting the key value (by which this command is called e.g. "calculate") from the global property VC_OInfos.
let matchedKey = VC_OInfos.matchedKey;
```


### For getting the only expression portion from the userQueries string
For getting the only expression portion from the raw user queries data, <ins>we can subtract matchedKey from the userQueries</ins>
```javascript
// For getting the only expression portion from the userQueries string , we subtract matchedKey from the userQueries
let expression = userQueries.slice(matchedKey.length);
```


### For getting voice input
For getting voice input use **`.getVoice()`** method of the VCSL
```javascript
//For getting the text from speech recognizer and storing it into voice_input variable
let voice_input = VC_apis.getVoice();
```


### For saying some text
For saying some text use **`.say()`** method of the VCSL
```javascript
//Our sample text
let someText = `This is sample text`;

//For saying
VC_apis.say(someText);
```


### To implement the multiple options, use the `.options()` method of the VCSL.
```javascript
const options = ["Hot/Cold","Day/Night","On/Off","Big/Small","Fast/Slow","Left/Right","Up/Down","Yes/No","Red/Green/Blue","Small/Medium/Large","Happy/Sad", "Old/New",
    "High/Low","Easy/Hard","Light/Dark","Simple/Complex","Quiet/Loud","Clean/Dirty","Full/Empty","Open/Closed","True/False","Morning/Afternoon","Summer/Winter","Digital/Analog",
    "Automatic/Manual"]; //Samples randoms options for Voice Command 's Options API preview

VC_apis.say(`Select a random option by saying the corresponding option number`); //For saying the text

let selectedOptn = VC_apis.options(...options); //For interacting with our random options and store the selected option value in to selectedOptn variable

VC_apis.say(`You selected the ${selectedOptn} option`); //For saying the selected option

```

## Here is a comprehensive API reference for Command Development for Voice Commands:
| Added by  | Name | Category |Description |
| ------------- |  ------------- |------------- | ------------ |
| **VCSL**  | **`new VCSL()`**  | **ADDING VCSL TO THE COMMAND** |**For Creation of a new Voice Command Support Library object**  |
| **VC_Engine Command**  | **`VC_OInfos.userQueries`**  | **GETTING RAW USER-QUIRES** |**For getting raw user queries data**  |
| **VC_Engine Command** | **`VC_OInfos.matchedKey`**  | **GETTING MATCHED KEYWORD** |**For getting the matching keyword value**  |
| **VC_Engine Command** | **`VC_OInfos.userQueries.slice ((VC_OInfos. matchedKey).length)`**  | **GETTING ONLY EXPRESSION** |**For getting the only expression portion from the raw user queries data**  |
| **VCSL**  | **`.pitch_value`**  | **READING SETTING VALUES** |**For getting TTS pitch setting value**  |
| **VCSL**  | **`.speed_value`**  | **READING SETTING VALUES** |**For getting TTS speed setting value**  |
| **VCSL**  | **`.max_options_value`**  | **READING SETTING VALUES** |**For getting maximum option setting value**  |
| **VCSL**  | **`.visual_feedback`**  | **READING SETTING VALUES** |**For getting the visual feedback status (either 'on' or 'off')**  |
| **VCSL**  | **`.voice_language`**  | **READING SETTING VALUES** |**For getting TTS language value.**|
| **VCSL**  | **`.stop_key`**  | **READING ADDITIONAL SETTING VALUES** |**For getting stop key value.**|
| **VCSL**  | **`.info`**  | **READING VCSL INFORMATION** |**For getting information about currently installed VCSL**|
| **VCSL**  | **`.customToast(toastMsg)`**  | **METHOD** |**For visually output some message**|
| **VCSL**  | **`.performTaskWait(taskName, checkingInterval, maxWait)`**  | **METHOD** |**For performing Tasker 's task and wait for its completion Unlike native performTask(), which executes a Tasker task from JavaScript without waiting, performTaskWait() ensures the task is finished before proceeding. <br> <br> <ins> checkingInterval: </ins> In which interval should the check to be done to see if the task has finished or not. Increasing the interval period reduces system resource usage, while decreasing the interval period increases system resource usage. <br> <br> <ins> maxWait: </ins> Maximum wait time in milliseconds. If this timeout is exceeded, the function will stop waiting and continue executing the next code (except for 0 timeout). There are two types of values for max_timeout: (a) 0: Waits indefinitely until the task is completed. (b) Non-zero value: Waits for a maximum of the specified time (in ms).**|
| **VCSL**  | **`.say(text)`**  | **METHOD** |**For saying output**|
| **VCSL**  | **`.getVoice()`**  | **METHOD** |**For getting voice input and return the text**|
| **VCSL**  | **`.options(...alternatives)`**  | **METHOD** |**For providing Voice Commands 's options interface**|
| **VCSL**  | **`.arrayConverter(tasker_Array)`**  | **METHOD** |**For Converting Tasker 's array into JavaScript 's array format**|
| **VCSL**  | **`.vclParser(vclData)`**  | **METHOD** |**For converting vcl data into JS object**|
| **VCSL**  | **`.formatDate(dateStr)`**  | **METHOD** |**For formatting default date string format (e.g. 10-02-2025) into more readable / audible date format (e.g 10 February 2025)**|
| **VCSL**  | **`.formatTime(timeStr)`**  | **METHOD** |**For formatting the default time string format (e.g. 17.45) into more readable / audible time format (e.g 5:45 PM)**|

## Example Command: Data Structure of the Calculator Command 
```xml
<vcl>
 <Name>Calculator Command</Name>
 <Version>v1.0.0</Version>
 <Author>nirmalpaul383</Author>
 <Description>A simple calculator command for evaluating simple math expressions (e.g "calculate 22 +358")</Description>
 <Keywords>calculate, calculator, math expression</Keywords>
 <Codes><![CDATA[
```
```javascript
// Calculator command is for evaluating simple math expressions
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//For Creation of a new Voice Command Support Library object
let VC_apis = new VCSL();

//For getting user queries (user 's raw command) data from the global property VC_OInfos. (e.g. "calculate 5 + 3 +24")
let userQueries = VC_OInfos.userQueries;

//For getting the key value (by which this command is called) from the global property VC_OInfos. (e.g. "calculate")
let matchedKey = VC_OInfos.matchedKey;

//For getting the only math expression portion from the userQueries string , we subtract matchedKey from the userQueries.
//(e.g. userQueries: "calculate 5 + 3 +24" , then the mathExpression: "5 + 3 +24")
let mathExpression = userQueries.slice(matchedKey.length);

//For removing whitespace from both sides
mathExpression = mathExpression.trim();

//Function for evaluating math expression without using the eval() function
function evaluate(expression) {
    return new Function('return ' + expression)();
};

let result = evaluate(mathExpression); //For evaluating math expression and storing it in to result variable

VC_apis.say(`The calculation answer is ${result}`); //For saying the calculation result
```
```xml
]]></Codes>
</vcl>
```

## Thanks
If you like this project please give a star to [this project](https://github.com/nirmalpaul383/Voice_Commands)

This project is originally made by me(N Paul). My [github profile](https://github.com/nirmalpaul383/) , [My youtube page](https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/) , [facebook page](https://facebook.com/a.new.way.Technical/)

This is an open source program. You are welcomed to modify it...

**Thank you for trying it out!**
