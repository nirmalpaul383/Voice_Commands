# Voice_Commands
A customizable Voice Assistant platform that supports installable custom commands/functions via Voice Command Loader (.vcl) files. Users can extend its functionality by creating their own commands using JavaScript and distributing them through .vcl files.

## Features
+ **Custom Installable Commands:**  Install your custom commands through .vcl files or manual code typing directly from the app's interface, allowing for endless possibilities.
+ **Command Uninstallation:** Easily uninstall the unnecessary commands directly from the app's interface, keeping your voice assistant organized and mess-free.
+ **JavaScript Support:** You can create custom commands using native JavaScript or using [Tasker's JavaScript interface](https://tasker.joaoapps.com/userguide/en/javascript.html) for seamless command developments.
+ **Cross-Platform Development:** You can develop commands on desktop or directly on the smartphone using code editors.
+ **VCL Exporter Tool:** Export your command code into .vcl files using the built-in VCL Exporter tool for smoothing the development process.
+ **Custom .VCL Installer:** By default it has Voice-Command-Loader (.vcl) installer written by me (N Paul), but you can use your own .vcl installers for command installation and management.
+ **VCSL (Voice Commands Support Library):** You can use VCSL's custom interface-related functions to simplify command programming and enhance the command development efficiency.
+ **Custom VCSL (Voice Commands Support Library) Support:** By default it has VCSL written by me (N Paul), but you can use your own VCSL implementations to further extend the platform's capabilities.
+ **Custom Keywords:** You can change the keywords for launching commands, making voice interactions more personalized.
+ **Custom Command Launcher:** By default, it uses **VC_Engine command** launcher developed by me (N Paul) to execute other commands. However, you can replace this with your own command launcher if needed.
+ **Multi-Event Triggering:** Execute commands based on various events
  + **Assistant Listener Service Event:** Execute your assigned commands (by default **VC_Engine command**) when assistant request event was occured.
  + **Phone Ringing Listener Service Event:** Execute your assigned commands (by default **Phone Ringing command**) when a phone call is ongoing.
  + **Missed Call Listener Service Event:** Execute your assigned commands (by default **Missed Call command**) when a missed call is detected.
+ **Cancel Keywords:** Cancel command execution using predefined cancel keywords, ensuring seamless voice interactions.
+ **Custom Cancel Keywords:** Define custom cancel keywords to align with your specific needs and preferences.
+ **TTS Customization:** Personalize your Voice Commands experience by changing the Text-to-Speech (TTS) settings.
