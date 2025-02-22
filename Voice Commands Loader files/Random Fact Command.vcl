
<vcl>
 <Name>Random Fact Command</Name>
 <Version>v1.0.0</Version>
 <Author>nirmalpaul383</Author>
 <Description>Random Fact Command can give random fact from https://uselessfacts.jsph.pl/ .The api (https://uselessfacts.jsph.pl/) which is used in this command is created by Joseph Paul (https://jsph.pl/)</Description>
 <Keywords>random fact, give me random fact, random information, useless fact, useless information</Keywords>
 <Codes><![CDATA[
// Random Fact Command can give random fact from https://uselessfacts.jsph.pl/
// The api (https://uselessfacts.jsph.pl/) which is used in this command is created by Joseph Paul (https://jsph.pl/)
// This command file is created by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383


// For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();


// For storing the fetched random fact from https://uselessfacts.jsph.pl/
let random_fact = ``;


//This function will fetch the random fact from https://uselessfacts.jsph.pl/
function random_fact_fetcher() {

    //URL for getting random fact
    let url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

    //We have used XMLHttpRequest() for data fetching
    let dataFetcher = new XMLHttpRequest();

    //For initializing the fetching request using synchronous request [ dataFetcher.open(method, url, async) ]
    dataFetcher.open("GET", url, false);

    //For sending the request to the server
    dataFetcher.send();

    //If the response was received from the server (status code: 200)
    if (dataFetcher.status === 200) {

        //For parsing the JSON response and storing it into data variable
        let data = JSON.parse(dataFetcher.responseText);

        //For returning the random fact
        return data.text;

    }

    //If there is an error while fetching data from the server, then error message should be returned
    else {
        return "Error while fetching random fact from uselessfacts.jsph.pl";
    }
};

// For feting the fact and store the information
random_fact = random_fact_fetcher()

//For saying the information
VC_apis.say(random_fact);

 ]]></Codes>
</vcl>