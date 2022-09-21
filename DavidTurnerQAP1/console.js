// Developer Name: David Turner
// Project Name: QAP 1
// Project Details: Task 1 - Understanding core global objects - Console
// Course Name: Full Stack JavaScript(node.js)

// Console (Global Object)

// The console module is a simple way to do debugging either in terminal or within a browser terminal

// There are three console methods that are used most commonly and they are:
// 1. console.log() - used to display simple messages to a terminal or console, used as a simple debug during the coding process
// 2. console.error()
// 3. console.warn()

// 1. console.log()
console.log();
console.log(`1. The console.log() method`);
console.log();
// There are a couple ways to utilize console dot log,
// simply code a string message inside the console.log brackets, declare constants, and concatenate constants into a console log method
// to display its value
console.log(`A simple msg displayed using console.log()`);
console.log();
// here a 2 constants are created and a string assigned to them, then using console.log they are displayed in the terminal
const theMsg1 = `Hello, my name is David Turner, I was born and raised in Saskatchewan. `;
console.log(`The constant theMsg1 is displayed in the teminal as: ${theMsg1}`);
const theMsg2 = `I moved to Newfoundland in 2010 after living in Alberta for almost 10 years`;
console.log(`The constant theMsg2 is displayed in the teminal as:: ${theMsg2}`);
console.log();
console.log(`Concatenatation of theMsg1 and theMsg2:`);
console.log(`${theMsg1}${theMsg2}`);

// 2. console.error()
// This function can be used to show an error message in the terminal or browser terminal, new Error is syntax used to generate an error
// the message error could also be made into a constant that can be reused in other parts of your code
console.log();
console.log(`2. The console.error() method`);
console.log();
const errorMsg = `There has been an error with this method, its OK you were meant to see this`;
console.error(new Error(`${errorMsg}`));

// 3. console.warn()
// Console warning is similar to an error and bring up a message for the user.
// This could be used in a function
console.log();
console.log(`3. The console.warn() method`);
console.log();

function theWarning(e) {
  console.warn(`The console.warn method can send a message: ${e}`);
}
// calling the function would work well in a if/else statement for an input,
// if a user input the correct value then the app will continue but if not the
// else will call the function 'theWarning'
theWarning(`For example "This is the wrong input"`);
