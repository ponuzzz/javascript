
const prompt = require("prompt-sync")();

let number = prompt("enter a number:");

let result = (number % 2==0) ? "even" : "odd";
console.log(result);
