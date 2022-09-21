// Developer Name: David Turner
// Project Name: QAP 1
// Project Details: Task 1 - Understanding core global objects- Buffer
// Course Name: Full Stack JavaScript(node.js)

// BUFFER (Global Object)

// A buffer is an allocated area of memory and was orginally introduced to handle binary data since most JavaScript developers only coded with strings and not binary.

// Here are some of the ways to construct a buffer are described and shown below.

// 1. Create an uninitiated buffer: Following is the syntax of creating an uninitiated buffer using octets:
// 2. Create a buffer from array: Following is the syntax to create a Buffer from a given array:
console.log();
console.log(`Global Object: Buffer`);
console.log();
console.log(`1. Creating an uninitiated buffer:`);

// 1. Uninitiated Buffer
// This code allocates how many characters will be allowed within the “buffer” constant
// and sets the constant to be called when needed
const myFirstBuffer = Buffer.alloc(255);
const msg = Buffer.alloc(255);

// Now that the buffer size is set, use the dot write method to assign the value to the buffer constant,
// the buffer constant will be stored in binary
console.log();
console.log(`Constant 1 using write method: `);
myFirstBuffer.write(
  `this is my first experience with node.js and global objects. `
);
// the dot toString method will convert the binary to a string that can be easily read on screen
console.log(myFirstBuffer.toString());
console.log();
// As a note dot write can be broken down this way, variableName.write(string[, offset][, length][, encoding])
// String - is the string data to be written to buffer.
// Offset - specifies the index of the buffer to start writing at.
// Length - the number of bytes to write.
// Encoding - is the type of encoding to use.
// If offset, length and encoding are not specified they all have defaults of 0, buffer length, and utf8 respectively
console.log(`Constant 2 using write method: `);
msg.write(`Hi, my name is David Turner and`);
console.log(msg.toString());
// here I can concatinate 2 buffered constants
const combined = `${msg} ${myFirstBuffer}`;
console.log();
console.log(`Buffered and concatinated constants: ${combined}`);
console.log();
// This shows how to write a string starting at a specific index number
console.log(`Write a string starting at a specific index number: `);
myFirstBuffer.write(`The course is taught by Peter.`, 62);
console.log(`${msg} ${myFirstBuffer}`);

// 2. Create a buffer from array
console.log();
console.log(`2. Creating a buffer from array:`);
console.log();
// Creates a new Buffer containing the UTF-8 encoding bytes of the string 'buffer'.
const arrayBuf = Buffer.from([12, 13, 14, 15, 16]);

// console.log(buf.toString());
console.log(`Display index of 0 from arrayBuf : ${arrayBuf[0]}`);
console.log(`Display index from arrayBuf  : ${arrayBuf[1]}`);
console.log();
console.log(`Iterating though the whole array of numbers`);
for (const valuesInArray of arrayBuf) {
  console.log(`${valuesInArray}`);
}
