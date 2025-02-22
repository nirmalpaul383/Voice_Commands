
<vcl>
 <Name>Bluetooth Battery Command</Name>
 <Version>v1.0.0</Version>
 <Author>nirmalpaul383</Author>
 <Description>Bluetooth Battery Command can give battery level information of the current connected Bluetooth device.</Description>
 <Keywords>bluetooth battery, battery of bluetooth</Keywords>
 <Codes><![CDATA[
// Bluetooth Battery Command can give battery level information of the current connected Bluetooth device.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383


// For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

//For clearing the global variable: %Bluetooth_Device_Info
setGlobal("Bluetooth_Device_Info", "")

//For calling our 'Custom Function Bluetooth Device Info' task and wait upto 3 sec for it to be completed.
VC_apis.performTaskWait("Custom Function Bluetooth Device Info", 500, 3000);

//For getting the value from global variable: %Bluetooth_Device_Info
let bt_device_info = global("Bluetooth_Device_Info");

//If bt_device_info is a empty string that means "Custom Function Bluetooth Device Info" function
//does not store any value to it
if (bt_device_info === "") {

    //For saying custom error message
    VC_apis.say(`Error while trying to get information about bluetooth device.`);

}
else {

    //For clearing the global variable: %Bluetooth_Device_Info
    setGlobal("Bluetooth_Device_Info", "")

    //For parsing bluetooth device info from the String format to JSON object format and store it back
    bt_device_info = JSON.parse(bt_device_info);

    //For converting and storing "bt_connected" property 's value (which is string format) into "isConnected" array
    let isConnected = bt_device_info.bt_connected.split(",");

    //For finding the index of the first occurrence of "true" value in the "isConnected" array
    let connected_device_index = isConnected.indexOf("true");

    //If connected_device_index value is equal to negetive one (-1) that means there are no
    //occurrence of "true" value in the "isConnected" array, which means no bluetooth devices
    //are currently connected
    if (connected_device_index === -1) {
        //For saying
        VC_apis.say("There are no Bluetooth devices currently connected");
    }
    else {
        //For storing our information
        let msg = `${bt_device_info.bt_name.split(",")[connected_device_index]} is currently
connected and the battery level is ${bt_device_info.bt_battery_level.split(",")[connected_device_index]}%`;

        //For saying the information
        VC_apis.say(msg);
    }

}

//This is sample data format of bt_device_info
// bt_device_info = {
// "bt_address": "...,...,..." ,
// "bt_alias": "Airdopes 161,realme 8i,Rockerz 235 Pro" ,
// "bt_battery_level": "%bt_battery_level1,%bt_battery_level2,60" ,
// "bt_class": "1028,524,1028" ,
// "bt_connected": "false,false,true" ,
// "bt_encrypted": "false,false,true" ,
// "bt_major_class" : "1024,512,1024" ,
// "bt_major_class_name": "Audio / Video,Phone,Audio / Video" ,
// "bt_name": "Airdopes 161,realme 8i,Rockerz 235 Pro" ,
// "bt_paired": "true,true,true" ,
// "bt_signal_strength": "%bt_signal_strength1,%bt_signal_strength2,0" ,
// "bt_type": "classic,dual,classic"
// }


 ]]></Codes>
</vcl>