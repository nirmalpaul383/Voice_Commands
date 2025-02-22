
<vcl>
  <Name>VCSL_Info</Name>
  <Version>v1.0.0</Version>
  <Author>nirmalpaul383</Author>
  <Description>VCSL_Info command can retrieve basic information from the current installed VC_Sl (Voice Commands Support Library).</Description>
  <Keywords>VCSL, info, about, Voice Commands Support Library, information</Keywords>
  <Codes><![CDATA[

// VCSL_Info command can retrieve basic information from the current installed VC_Sl (Voice Control Support Library).
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

let ver = VC_apis.info.VCSL_Version; //For getting current VCSL version

let auth_name = VC_apis.info.VCSL_Author; //For getting current VCSL author name

let auth_github_prfl = VC_apis.info.VCSL_Author_Github; //For getting current VCSL author github profile


const options = ["Yes" , "No"]; //Options

VC_apis.say(`Current Voice Control Support Library's version: ${ver}. Developed by ${auth_name}. Do you want to visit his profile?`)

let selectedOptn = VC_apis.options(...options); //For interacting with our options

if (selectedOptn === "Yes") {
    VC_apis.say("Visiting the profile page...")
    browseURL(auth_github_prfl)
}
else {
    //Do nothing
}

  ]]></Codes>
</vcl>