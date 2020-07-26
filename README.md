# Mini Weather Reporting API

This repository contains This package contains code for fetching JSON of weather of a certain city from openweathermap.com API using Axios NPM package, converting JSON from openweathermap to HTML template using handlebars NPM packages and finally saving the converted HTML to the local machine using FS NPM package


## How to install?
1. Open command prompt if you have Windows OS or terminal if you have a Linux OS

2. Install NodeJS using the link "https://nodejs.org/en/download/" in Windows OS or Mac and for Ubuntu OS run `sudo apt-get install nodejs` or for general Linux OS please run `sudo <package-manager-name> install nodejs`

3. Check if you have installed nodejs using the command `node -v` and `npm -v` both commands should give out node and npm versions respectively this would confirm the installation of both the packages. 

4. Please note that the package 'nodejs' installs both node and npm. Node is for executing nodejs apps which are in javascript format. NPM (Nodejs Package Manager) is for installing nodejs packages for applications in nodejs

5. Please clone the project using `git clone https://github.com/aashishg/MiniWeatherReportingAPI.git`

6. Then enter into the directory using cd command  the directory name would be "MiniWeatherReportingAPI" or the directory you cloned the repository in.

7. Run `npm install` to install all the packages required to run the project

8. Please make sure you have an active internet connection before proceeding since we need to make a call to openweathermap.com API and it requires an active internet connection

9. Head on to openweathermap.com, signup, verify your email and head on to home.openweathermap.com under API keys to get your default API key or make an API key, you can make unlimited API keys even under free account. Please wait for upto 4 hours to get your API key activated.

10. Add API key on line 23 for `const appid=<your-openweathermap-api-key>` replacing `<your-openweathermap-api-key>` for example `const appid = "57abh...."` don't forget to add double quotes "" around your API key

11. Run `node app.js <argument 1> <argument 2> <argument 3>` 
Argument 1: Choices: 1,2 and 3
Is the option to choose from that is: 

Option 1: Weather by city 

Argument 2: city name,state code(optional), country code(optional) 

Example 1 of argument 2: Mumbai

Example 2 of argument 2: Mumbai, mh

Example 3 of argument 2: Mumbai, mh,in

Command: `node app.js <option number> <city name>, <state code>(optional), <country code>(optional)` 

Command Example: `node app.js 1 Mumbai, mh, in`

Option 2: Weather by City ID

Argument 2: city ID

Example of argument 2: 2172797

Command: `node app.js <option number> <city id>`

Command Example: `node app.js 2 2172797`

Option 3: Weather by geographic coordinates

Argument 2: latitude

Argument 3: longitude

Example of argument 2: 35

Example of argument 3: 139  

Command: `node app.js <option number> <lat> <lon>`

Command Example: `node app.js 3 35 139`

Option 4: Weather by zip code

Argument 2: zip code, country code

Example 1 of argument 2: 94040

Example 2 of argument 2: us

Command: `node app.js <option number> <zip code>, <country code>`

Command Example: `node app.js 4 94040, us`

Default: You will get a default weather data for London, UK if no arguments are entered

For example: `node app.js`

12. Two HTML samples will be produced 'sample1.html' and 'sample2.html'

13. Please try running both sample HTMLs in your default browser to see the output of the application

14. This app is tested for latest nodejs, axios, fs and handlebars packages and If you are still experiencing any error during installation of nodejs or running the application please email me at "aashishgangwani@gmail.com" I will try to resolve the error as soon as possible.


## URL structure for API

### Weather by city name
1. `api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}`

2. `api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}`

3. `api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}`

Example of API calls:
1. `api.openweathermap.org/data/2.5/weather?q=London&appid=<your-openweathermap-api-key>`

2. `api.openweathermap.org/data/2.5/weather?q=London,uk&appid=<your-openweathermap-api-key>`

### Weather by City ID
 
 `api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}`

Example of API call: 
 
 `api.openweathermap.org/data/2.5/weather?id=2172797&appid=<your-openweathermap-api-key>`

### Weather by geographic coordinates
 `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}`

Example of API call:
 
 `api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=<your-openweathermap-api-key>`

### Weather by Zip code:

 `api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}`

 Example of API call:
 
 `api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=<your-openweathermap-api-key>`




