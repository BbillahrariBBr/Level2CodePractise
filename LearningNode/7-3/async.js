const readAsync = require("fs");
readAsync.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error Reading Text");
  }
  //console.log(data);
  // writing text async
  readAsync.writeFile(
    "./text/read2.txt",
    data + "Update again",
    "utf-8",
    (err) => {
      if (err) {
        throw Error("Error Writing data");
      }
      console.log("Data Write Successfully");
    }
  );
});
console.log("testing asyn");
