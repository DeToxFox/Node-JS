// This will bring in the "http" global object no npm install required
const http = require("http");

// installed an npm for a weather library, the npm helps direct the code block structure, drawing in api date based on search parameters
// the appended to an empty array that can then be called by the switch case displaying it to the html page in the browser
var weather = require("weather-js");
var theWeather = [];

weather.find({ search: "Regina, SK", degreeType: "C" }, function (err, result) {
  if (err) console.log(err);
  theWeather = JSON.stringify(result, null, 2);
});

// This accesses the routes.js file that has functions related to paths, additional msgs, and response (app sends back when it gets an http request)
const routes = require("./routes.js");

// this is a constant for the port number that will be used further down
const port = 3000;

// Creating a function for the server so that requests (req) and responses (res) can be sent to multiple html pages utilizing a switch statement
const server = http.createServer((req, res) => {
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      theStatusCode = res.statusCode;
      routes.homePage(path, req.url, res, theStatusCode);
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      theStatusCode = res.statusCode;
      routes.aboutMePage(path, req.url, res, theStatusCode);
      // console.log(`About fired Just Like This`);
      break;

    case "/firstCode":
      // path += "firstCode.html";
      res.statusCode = 411;
      theStatusCode = res.statusCode;
      routes.temp(path, req.url, res, theStatusCode);
      // res.setHeader("Location", 100);
      res.setHeader("Content-Length", 2);
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World");

      // console.log(`About fired Just Like This`);
      break;

    case "/contactMe":
      path += "contactMe.html";
      // this will set a cookie that will expire on the users browser once the day and time elapsed
      res.setHeader(
        "Set-Cookie",
        "testcookie=lastPageVisited;expires=01-Jan-2023 00:00:00 GMT;path=/contactMe;"
      );
      res.statusCode = 200;
      theStatusCode = res.statusCode;
      routes.contactMePage(path, req.url, res, theStatusCode);
      // console.log(`Contacting David Turner`);
      break;

    case "/projects":
      path += "projects.html";
      res.statusCode = 302;
      theStatusCode = res.statusCode;
      routes.projectsPage(path, req.url, res, theStatusCode);
      break;

    case "/resume":
      path += "resume.html";
      res.statusCode = 200;
      theStatusCode = res.statusCode;
      routes.resumePage(path, req.url, res, theStatusCode);
      break;

    case "/dataBase":
      path += "error403.html";
      res.statusCode = 403;
      theStatusCode = res.statusCode;
      routes.notFoundPage(path, req.url, res, theStatusCode);
      break;

    case "/subscribe":
      path += "subscribe.html";
      res.statusCode = 200;
      theStatusCode = res.statusCode;
      routes.subscribePage(path, req.url, res, theStatusCode);
      break;

    case "/redirect":
      console.log(`redirect used`);
      res.statusCode = 301;
      theStatusCode = res.statusCode;
      routes.redirPage(path, req.url, res, theStatusCode);
      res.setHeader("Location", "/subscribe");
      res.end();
      break;

    case "/weather":
      console.log(`weather`);
      // console.log(theWeather);
      path += "weather.html";
      res.statusCode = 200;
      theStatusCode = res.statusCode;
      routes.weather(path, req.url, res, theStatusCode);
      res.write(theWeather, "utf8", () => {
        console.log("This writes string data");
      });
      res.end();
      break;

    default:
      path += "errors404.html";
      res.statusCode = 404;
      theStatusCode = res.statusCode;
      routes.notFoundPage(path, req.url, res, theStatusCode);
      break;
  }
});

server.listen(port, () => {
  console.log(`Server function is listening on port ${port}`);
});
