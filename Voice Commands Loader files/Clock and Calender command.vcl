
<vcl>
  <Name>Clock & Calender command</Name>
  <Version>v1.0.0</Version>
  <Author>nirmalpaul383</Author>
  <Description>Time & Date command can give the current time and date details.</Description>
  <Keywords>current date, current time, now, clock, calendar</Keywords>
  <Codes><![CDATA[

// Clock command can give the current time and date details.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

let current_Date = global("DATE"); //For getting the current date
let current_Time = global("TIME"); //For getting the current time
let dayOfWeek = global("DAYW"); //For getting the day of week

//For formatting the date string into more readable / audible date format and store it back
current_Date = VC_apis.formatDate(current_Date)

//For formatting the time string into more readable / audible date format and store it back
current_Time = VC_apis.formatTime(current_Time)

//For saying the current date and time
VC_apis.say(`Today is ${dayOfWeek}, ${current_Date} , the current time is ${current_Time}`);


  ]]></Codes>
</vcl>