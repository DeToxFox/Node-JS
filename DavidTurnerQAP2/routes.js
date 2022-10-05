// This will bring in the "fs" or file structure global object no npm install required
const fs = require("fs");
// This will bring in the "events" global object no npm install required
const eventEmmitter = require("events");
// Create the class MyEmitter to define it, making sure to the first letter is upper case, this is for classes
class MyEmitter extends eventEmmitter {}
// This instantiates a new emitter object that will be needed to access the index page
const myEmitter = new MyEmitter();

// This allows routes.js to access the functions within the logEvents.js
const logEvents = require("./logEvents");

// Creating an dot addListener or dot on function, it will have name "routes", this could be anything and functions below can have different names
// to serve different purposes then there are in this case 3 parameters, event, level (ex: information, error), and a message that can be logged
myEmitter.on("route", (event, level, msg, theStatusCode) => {
  const date = new Date();
  console.log(
    date.toLocaleString() +
      "| Status Code: " +
      theStatusCode +
      " -- Level is: " +
      level.toUpperCase() +
      " -- " +
      "System MSG: " +
      msg
  );
  // once the above part of the listeners has exicuted its block
  // the logEvents function in logEvents.js will fire and the parameters here will be sent over to be processed
  logEvents(event, level, msg, theStatusCode);
});

// This function will access the index page or root
function homePage(path, event, res, theStatusCode) {
  displayFile(path, res);
  if (event === "/") {
    myEmitter.emit(
      "route",
      "/homepage",
      "successful",
      "the home page was visited.",
      theStatusCode
    );
  }
}

// This function will access the about me page
function aboutMePage(path, event, res, theStatusCode) {
  // console.log(`About fired`);
  displayFile(path, res);
  myEmitter.emit(
    "route",
    event,
    "successful",
    "the about me page was visited.",
    theStatusCode
  );
}

// This function will access the contact me page
function contactMePage(path, event, res, theStatusCode) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    event,
    "successful",
    "the contact me page was visited.",
    theStatusCode
  );
}

// This function will access the projects page
function projectsPage(path, event, res, theStatusCode) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    event,
    "redirect",
    "the projects page was visited.",
    theStatusCode
  );
}

// This function will access the resume page
function resumePage(path, event, res, theStatusCode) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    event,
    "successful",
    "the resume page was visited.",
    theStatusCode
  );
}

// This function will access the youTube subscribe page after
// the permenent redirect (301 status code) has been completed
function subscribePage(path, event, res, theStatusCode) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    event,
    "successful",
    "the subscribe page was visited.",
    theStatusCode
  );
}

// when this function is fired it was because data was sent to an html page
// the content length was longer than the buffer allow tripping a 411 status code
function temp(path, event, res, theStatusCode) {
  // displayFile(path, res);
  myEmitter.emit(
    "route",
    event,
    "error",
    "411 status code incomplete header length.",
    theStatusCode
  );
}

// this function is only intended to capture the msg and log it when the 1st redirect has been completed
// a cookie will store this action in a browser until the browser history is cleared otherwise the redirect only
// occurs the 1st time
function redirPage(path, event, res, theStatusCode) {
  // displayFile(path, res);
  myEmitter.emit(
    "route",
    event,
    "redirect",
    "the page redirected.",
    theStatusCode
  );
}

// This function will access the 404 page
function notFoundPage(path, event, res, theStatusCode) {
  displayFile(path, res);
  myEmitter.emit("route", event, "error", "Error was thrown.", theStatusCode);
}

// this will present the weather API data, as well as log a message
function weather(path, event, res, theStatusCode) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    event,
    "successful",
    "the weather app was accessed.",
    theStatusCode
  );
}

// for the functions above the information sent over from index.js when a switch case is instanciated
// will then be process here, as path and response come from the switch case statements that then get
// passed as parameters where the "displayFile" functions are called displaying them on the respective
// html pages in the browser
function displayFile(path, res) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.writeHead(res.statusCode, { "Content-Type": "text/html" });
      console.log("File was accessed");
      res.end(data);
    }
  });
}

// export functions for use in other dot js files
module.exports = {
  homePage,
  aboutMePage,
  contactMePage,
  projectsPage,
  resumePage,
  subscribePage,
  redirPage,
  weather,
  notFoundPage,
  temp,
};
