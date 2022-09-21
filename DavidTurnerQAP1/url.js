// Developer Name: David Turner
// Project Name: QAP 1
// Project Details: Task 1 - Understanding core global objects - URL
// Course Name: Full Stack JavaScript(node.js)

// URL (Global Object)

// The URL module splits up a web address into readable parts utilizing "resolution" and "parsing".
// Resolution resolves the domain name from right to left meaning it will first resolve “.com”. Then “.com” gives a link to the resolver after that our request will be forwarded to the Server.
// Parsing determines where to forward traffic across different links or into different servers. A URL includes a protocol identifier (http, for Web traffic) and a resource name, such as www.davidturner.com.
console.log();
console.log(`Global Object: URL`);
console.log();

// this uses "require" to bring in the library that was downloaded
const url = require("url");

// First create the required url constant, it can be named anything
// but name it something logical and understandable
//  "http://localhost:3000 is the main domain name
// /davidturner is the path name
// ? is the query parameter and the query that follows it "country=Canada&city=St. John's" and is set in a key value pair
// key(s) are country, province, and city, the values are Canada, NL, and St. John's, the & combines them
const davidsRequestedUrl =
  "http://localhost:3000/davidturner?country=Canada&province=NL&city=St. John's";
console.log(`The full url is: ${davidsRequestedUrl}`);
console.log();

// Use the url.parse method, the url name could be anything as long as its followed by dot parse,
// pass it the url name, "davidsRequestedUrl" and set it to true, now all parts can be manipulated
const davidsRequestedUrlObject = url.parse(davidsRequestedUrl, true);
console.log(
  `Parse turns the URL into a manipulatable object like an array but wont list all parts as seen here: ${davidsRequestedUrlObject}`
);
console.log();
console.log(`Parse allows access to different parts of the URL: `);
console.log(`Host location: ${davidsRequestedUrlObject.host}`);
console.log(`The path name: ${davidsRequestedUrlObject.pathname}`);
console.log(`Query search: ${davidsRequestedUrlObject.search}`);
console.log();
// Similar to parse, breaking down the Query Search parameter using dot query property
const queryData = davidsRequestedUrlObject.query;
console.log(
  `Similar to dot parse, dot query property will breaking down the Query Search parameter`
);
console.log(`Country: ${queryData.country}`);
console.log(`Province: ${queryData.province}`);
console.log(`City: ${queryData.city}`);
