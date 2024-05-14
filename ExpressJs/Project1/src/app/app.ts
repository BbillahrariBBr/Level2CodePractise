//const express = require("express");
import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  //   res.send("Got data");
  res.json({
    message: "Successfully Received Data",
  });
});
export default app;
