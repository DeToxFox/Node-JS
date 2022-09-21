// Developer Name: David Turner
// Project Name: QAP 1
// Project Details: Task 2 - Understanding NPM
// Course Name: Full Stack JavaScript(node.js)

console.log();
console.log(`Task 2: Understanding npm and Express frameworks plus moments`);
console.log();

// It can be a bit cumbersome to work with Node.js only, so Express is a framework for Node.js, so use Node.js
// writing Javascript code in the Node environment but Express makes certain things easier.
// The idea behind a framework is to give the coder a lot of utility, functions and methods
// that allow focus on building web apps, server side code in the case of Node.js much easier so there is less reinventing of the wheel.

// The moments library allows a developer easy access to the current date and time and then allows formatting to be displayed for the user

// in the package.json file under scripts I used  "devStart": "nodemon express.js", like so "scripts": {"devStart": "nodemon express.js"},
//then in visual studio code at the command line in the terminal ran "npm run devStart" and
// after it logs any saved console changes automatically to the terminal window

// installed using command line: Express using npm install express --save, Nodemon using npm install -g nodemon, and Moments using npm install moment --save

// this uses "require" to bring in the librarys that were downloaded, express and moment
const express = require("express");
const moment = require("moment");
// create an app variable calling express as a function
// calling the express function creates an application allowing setup of the entire server
const app = express();
// this is a constant for the port number that will be used further down
const port = 3000;

// Creating a current date constant and formatting that constant to remove time and GMT-0230 (Newfoundland Daylight Time)
// This is creating a constant to retrieve the current date and time
const currDate = new Date();
// toDateString is one of the toString methods used to format and return a date string, in this case showing name of the day, month, date, and year.
const myDate = currDate.toDateString();
console.log(`Displaying the current and formated date`);
console.log(`Current date: ${currDate}`);
console.log(`Formated date: ${myDate}`);

// This will allow for retrieval of specific details or segments of the current date
console.log();
console.log(`Getter Functions to get specific details of the current date`);
const year = currDate.getFullYear();
const month = currDate.getMonth();
const day = currDate.getDate();
const hour = currDate.getHours();
const minute = currDate.getMinutes();
console.log(`Current year: ${year}`);
console.log(`Current month: ${month}`);
console.log(`Current day: ${day}`);
console.log(`Current hour: ${hour}`);
console.log(`Current minute: ${minute}`);
console.log();

// here creating a listener requeset allows "app" to listen for the response being sent from the app.get request function, here is were port was used
app.listen(port, () => {
  console.log(`This is an example app listening on port ${port}`);
});

// this is a get request that follows the root path "/" (index.js) and takes 2 parameters of req (request) and response (res)
app.get("/", (req, res) => {
  console.log();
  console.log(`DT was here and the current date is ${myDate}`);
  // send is a method and sends information down to the user
  // the code was ran to the user, so it created a route to the index (the "/" or root is index.js)
  res.send(
    `Hi Peter, how are you? Just to let you know the current date and time is ${currDate}.  This is the date and time formated to remove time and GMT ${myDate}`
  );
});

console.log(
  `INSTRUCTION (OPTIONAL): in the package.json file under scripts use "devStart": "nodemon express.js", 
  like so "scripts": {"devStart": "nodemon express.js"}, then in visual studio code at the command line in the terminal 
  run "npm run devStart" and then it logs any saved console changes automatically to the terminal window, no need to 
  terminate or re-run "node express.js"`
);
console.log();
console.log(
  `INSTRUCTION: To get "DT was here" within the function to show up in the terminal below you will have to open a 
  local host 3000 (http://localhost:3000) as it is listening for the app to run every time you refresh the web browser 
  the "DT was here" will show up in the terminal below`
);
console.log();
