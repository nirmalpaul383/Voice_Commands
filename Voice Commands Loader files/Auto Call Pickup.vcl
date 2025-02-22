
<vcl>
 <Name>Auto Call Pickup</Name>
 <Version>v1.0.0</Version>
 <Author>nirmalpaul383</Author>
 <Description>Automatically pick up incoming calls without manual intervention. This command is designed for working with Phone Ringing Listener Service event.</Description>
 <Keywords>[works with Phone Ringing Listener Service event]</Keywords>
 <Codes><![CDATA[
// Auto call pickup: Automatically pick up incoming calls without manual intervention.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

//For getting ringer volume value before changing it
let old_Ringer_Vol = global("VOLR")

//For changing the ringer volume
ringerVol(0,false,false)

//For accessing the caller name from global variable "%CNAME"
let caller = global("CNAME");

//For saying the caller name
VC_apis.say(`Auto call picking up. Caller name: ${caller}`);

//For changing the ringer volume to its old value
ringerVol(parseInt(old_Ringer_Vol),false,false)

takeCall(); //For picking up incoming call


 ]]></Codes>
</vcl>