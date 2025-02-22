
<vcl>
 <Name>Wikipedia Command</Name>
 <Version>v1.0.0</Version>
 <Author>nirmalpaul383</Author>
 <Description>Wikipedia Command is a command use for fetching basic information from Wikipedia.</Description>
 <Keywords>wikipedia, give me information about, info, information, wiki</Keywords>
 <Codes><![CDATA[

// Wikipedia Command is a command use for fetching basic information from Wikipedia using the rest API.
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383


// For Creation of a new Voice Control Support Library object
let VC_apis = new VCSL();

// For getting user queries (user 's raw command) data from the global property VC_OInfos.
// (e.g. "Wikipedia JavaScript")
let userQueries = VC_OInfos.userQueries;

// For getting the key value (by which this command is called) from the global property VC_OInfos.
// (e.g. "wikipedia")
let matchedKey = VC_OInfos.matchedKey;

// For getting the only article name portion from the userQueries string , we subtract matchedKey
// from the userQueries. (e.g. userQueries: "Wikipedia JavaScript" , then the articleName: "JavaScript")
let articleName = userQueries.slice(matchedKey.length);

//For removing whitespace from both sides
articleName = articleName.trim();

// For storing the fetched introduction information from wikipedia
let info_from_Wikipedia = ``;


//This function will fetch the information from Wikipedia page using the rest api.
function fetch_from_Wikipedia(topic) {

    //URL for getting information
    let url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(topic);

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

        //If the data has the extract property then that data must be returned, 
        //otherwise there is no information about that topic on the Wikipedia
        if (data.extract) {

            return data.extract;

        } else {

            return "No information found.";

        }
    }

    //If there is an error while fetching data from the server, then error message should be returned
    else {
        return "Error while fetching data from Wikipedia.";
    }
};

// For feting the information from wikipedia and store the information
info_from_Wikipedia = fetch_from_Wikipedia(articleName);

//For saying the information
VC_apis.say(info_from_Wikipedia);







 ]]></Codes>
</vcl>