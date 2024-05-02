const { a, add, b } = require("./file2.js");
const { a: a3, add: add3, b: b3 } = require("./file3.js");

console.log(add3(4, 3, 5));
console.log(b3);
console.log(a3);
