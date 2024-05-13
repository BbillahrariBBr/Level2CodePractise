const EventEmitter = require("events");

const myEmit = new EventEmitter();

//  first listener
myEmit.on("birthday", ({ name }) => {
  console.log(`HAPPY BIRTHDAY TO Dear ${name}`);
});

myEmit.on("birthday", ({ gift }) => {
  console.log(`I will send u ${gift}`);
});
myEmit.emit("birthday", { name: "MIM", gift: "Phone" });
