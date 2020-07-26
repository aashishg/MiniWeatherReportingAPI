/* Task: Create mini API which will download JSON from internet
 using an API and then prepare an HTML report to be saved
 in local machine */

// First we load up the required libraries
const axios = require('axios');
const handlebars = require('handlebars');
const fs = require('fs');
const Path = require('path');

/* Section 1: Download JSON from Internet 
 API to use: https://api.openweathermap.org
 Library to use "axios"
 Library to use "fs" (for file system, creating file and saving)

 We write an asynchronized function called downloadJSON() which
 will download JSON from the required URL and save the JSON file 
 with the downloaded JSON in the local filesystem */

async function downloadJSON () {  

// Openweathermap.com API key
  const appid = "<your-openweathermap-api-key>";

  /* Taking the arguments passed by user in myArgs variable. As first two arguments are system arguments
   we take the 3rd argument which has all the user arguments*/
  var myArgs = process.argv.slice(2);
  /* URL from the task which is given in mail
   Switch to API URL structure as user chooses between options 1 to 4
   The default URL structure is Weather by City Name and the default city is London. 
   Default URL structure is chosen if no arguments is passed */
  switch (myArgs[0]) {
    case '1':
      var url = 'https://api.openweathermap.org/data/2.5/weather?q='+myArgs[1]+'&appid='+appid;
        break;
    case '2':
      var url = 'https://api.openweathermap.org/data/2.5/weather?id='+myArgs[1]+'&appid='+appid;
        break;
    case '3':
      var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+myArgs[1]+'&lon='+myArgs[2]+'&appid='+appid;
        break;
    case '4':
      var url = 'https://api.openweathermap.org/data/2.5/weather?zip='+myArgs[1]+'&appid='+appid;
        break;
    default:
      var url = 'https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=439d4b804bc8187953eb36d2a8c26a02'
    }
  //Defines the path where the file will be stored
  const path = Path.resolve('./', 'weatherfile.json')
  //Writes the JSON file to the path with fs library 
  const writer = fs.createWriteStream(path) 

  //Error handling with try and catch
  try {
// Gets API data and stores in response
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)
} catch (err) {
  // Prints error on console
  console.error(err);
}

  
}

/* Section 2 - Prepare an HTML Report and Save
 Library to use "handlebars" for HTML templating
 Library to use "fs" (for file system, creating file and saving)

 Writing a general function for creating sample HTML named makingSampleHTML() with templates
 exactly like mentioned in the assignment email using handlebars and fs
 library */
function makingSampleHTML(samplehbs,samplehtml) {
 // first we take input JSON we downloaded in downloadJSON() function
 const inputJson = require('./weatherfile.json');
 // we take the input as sample1.html or sample2.html which will be 
 // based on template of samples in the assignment email

  const outFile = "./"+samplehtml;

 /* I have made a handlebars template file named sample1.hbs for sample 1
  for sample 1 and sample2.hbs for sample 2 as in the assignment email
  We first read the file load the data  into data variable, convert it into string, and error(if any) in err variable 
  and then use the function renderToString to render the data as HTML by steps described in earlier 
  comment*/
  fs.readFile('./'+samplehbs, function(err, data){
    if (!err) {
         // make the data loaded into a string
         const source = data.toString();
         // call the render function to render data 
         renderToString(source, inputJson);
    } else {
      console.log("Error in reading hbs file")
    }
  });

 /* We make a renderToString function which takes the 
  source data in string format, compiles it using handlebars
  , templates it for HTML and writes it into a string */
   function renderToString(source, data) {
      const template = handlebars.compile(source);
      const outputString = template(data);
      console.log(outputString);
      fs.writeFileSync(outFile, outputString);
      console.log(`File written to ${outFile}`);
      return outputString;
  }

  

}


// Executing download function and makingSampleHTML function in order to 
// download the API data, make HTML template out of it and store it on local machine
downloadJSON()  //Downloads the JSON file from the link in the path and the name assigned

setTimeout(function() {makingSampleHTML("sample1.hbs","sample1.html")}, 5000); //Will wait for JSON file to be downloaded after 5 secs
setTimeout(function() {makingSampleHTML("sample2.hbs","sample2.html")}, 10000); //Will wait for 10 secs after the sample1.html is generated