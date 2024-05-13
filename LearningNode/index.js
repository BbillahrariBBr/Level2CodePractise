// local modules

const { a, add } = require("./local-1.js");
// name alias a:a2
const { a: a2, add: add2 } = require("./local-2.js");
// console.log(add(2, 3));
// console.log(a);
// console.log(add2(2, 6, 15));
// console.log(a2);

// built in modules

const path = require("path");
console.log(
  path.dirname("E:/Phero/Level-2/Level2CodePractise/LearningNode/index.js")
);
console.log(
  path.parse("E:/Phero/Level-2/Level2CodePractise/LearningNode/index.js")
);
