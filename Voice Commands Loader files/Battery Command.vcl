
<vcl>
 <Name>Battery Command</Name>
 <Version>v1.0.0</Version>
 <Author>nirmalpaul383</Author>
 <Description>Battery Command can give the battery level information of the device.</Description>
 <Keywords>battery, device's battery, current battery level</Keywords>
 <Codes><![CDATA[
// Battery Command can give the battery level information of the device.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383


// For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

//For getting the Battery level info from global variable %BATT and storing it
let battery_level = global("BATT");

//For saying the battery level
VC_apis.say(`The device's current battery level is ${battery_level}%`)


 ]]></Codes>
</vcl>