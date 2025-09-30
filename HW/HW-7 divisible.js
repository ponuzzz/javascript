

const prompt = require("prompt-sync")();

let number = prompt("enter the  number :");

if(number %3 == 0 && number % 5==0){
    console.log("the number is divisible by both 3 and 5.");

}else{
    console.log("the number is not divisible by both 3 and 5.");

}
    


