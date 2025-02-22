
<vcl>
  <Name>Missed Call command</Name>
  <Version>v1.0.0</Version>
  <Author>nirmalpaul383</Author>
  <Description>This command is designed for working with Missed Call Listner Service event. Whenever there is a missed call occur this command will say the missed call caller name (If this command was previously assigned with Missed Call Listner Service event from the setting)</Description>
  <Keywords>[works with Missed Call Listner Service event]</Keywords>
  <Codes><![CDATA[

// Missed Call command is responsible for saying missed call caller name.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383).
// You can download source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//Importing and evaluating (using the Function constructor (without using the eval() function))
// Voice Control Support Library from global variable %VC_SL
new Function(global("VC_SL"))();


//For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

// For getting ringer volume value before changing it
let old_Ringer_Vol = global("VOLR")

// For changing the ringer volume
ringerVol(0,false,false)

// For accessing the caller name from global variable "%CNAME"
let caller = global("CNAME");


// For saying the missed call caller name
VC_apis.say(`You have a missed call from ${caller}.
You have received a missed call from ${caller}`)

// For changing the ringer volume to its old value
ringerVol(parseInt(old_Ringer_Vol),false,false)

  ]]></Codes>
</vcl>