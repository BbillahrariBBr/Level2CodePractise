const http = require("http");
const fs = require("fs");
// creating a server using raw node.js
const serv = http.createServer();

// lsitener
serv.on("request", (req, res) => {
  if (req.url === "./read-file" && req.method === "GET");
  //streaming file reading
  const readableStream = fs.createReadStream("../7-3/text/read.txt");
  readableStream.on("data", (buffer) => {
    res.statusCode = 200;
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.statusCode = 200;
    res.end("The Streaming is Over!");
  });

  readableStream.on("error", (error) => {
    console.log(error);
    res.statusCode = 500;
    res.end("Something is went wrong!");
  });
});
// Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);
serv.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});
