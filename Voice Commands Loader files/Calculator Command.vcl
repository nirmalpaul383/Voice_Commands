
<vcl>
 <Name>Calculator Command</Name>
 <Version>v1.0.0</Version>
 <Author>nirmalpaul383</Author>
 <Description>A simple calculator command for evaluating simple math expressions (e.g "calculate 22 +358")</Description>
 <Keywords>calculate, calculator, math expression</Keywords>
 <Codes><![CDATA[
// Calculator command is for evaluating simple math expressions
// This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download
// source files from my github profile https://github.com/nirmalpaul383 .
// My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
// FaceBook Page: https://www.facebook.com/a.New.Way.Technical/
// GitHub Page: https://github.com/nirmalpaul383 


//For Creation of a new Voice Control Support Library object
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
  
 ]]></Codes>
</vcl>