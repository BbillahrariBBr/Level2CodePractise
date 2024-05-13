// built in module
// file module
const fs = require("fs");

// reading file text
const read = fs.readFileSync("./text/read.txt", "utf-8");

//write  sync a text

const writtenText = fs.writeFileSync(
  "./text/write.txt",
  read + "This is my written Text"
);
console.log(writtenText);
