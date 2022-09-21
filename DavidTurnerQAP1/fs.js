// Developer Name: David Turner
// Project Name: QAP 1
// Project Details: Task 1 - Understanding core global objects- File System FS
// Course Name: Full Stack JavaScript(node.js)

// File System FS (Global Object)

// The Node.js file system module allows you to work with the file system on your computer.

console.log();
console.log(`Global Object: File System FS`);
console.log();

// Use the reuire() method to access the File System module
const fs = require("fs");

// NOTE: Sync is used so that the process of creating the text file, appending and reading are not done all at the same time, sync will allow for this to run 1 item at a time
// This is used to create the text file, this can be repeated to create file with different names and after the comma add in a string to be written to the text file
console.log(`1st create the text file using dot writeFileSync`);
fs.writeFileSync(
  "david_turner_text_file.txt",
  "My first text file in node js."
);

// Append is used to add new information, data to an existing text file without overwriting the exiting information and will add it after the last entry
console.log(`2nd append new data using dot appendFileSync`);
fs.appendFileSync(
  "../DavidTurnerQAP1/david_turner_text_file.txt",
  "\nThis appends new values to the txt file."
);

// Lastly the data can be displayed, if utf8 is not added in binary values will be displayed vs string values
console.log(
  `3rd Display all data using dot readFileSync using utf8 for readability`
);
const myFile = fs.readFileSync(
  "../DavidTurnerQAP1/david_turner_text_file.txt",
  {
    encoding: "utf8",
  }
);
console.log();
console.log(myFile);
