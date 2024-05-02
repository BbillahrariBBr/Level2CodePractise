console.log(global);
//  iife func
((name) => {
  const a = 10;
  console.log(`I will level up my skills in ${name}`);
})("level2");

console.log(__dirname, __filename, module);
