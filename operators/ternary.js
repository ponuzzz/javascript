//condition ? succescode : failure code;

const prompt = require("prompt-sync")();

let age = prompt("enter your age :");

//let age = 10;
let result = (age >= 18) ? "adult" : "minor";
console.log(result);



