const prompt = require("prompt-sync")();

let str = prompt("enter a string: ");
let palStr = str.replace(/\s+/g, '').toLowerCase();
let reversedStr = palStr.split('').reverse().join('');
if(palStr === reversedStr){
    console.log("is a palindrome");
}else{
    console.log("not a palindrome");
    
}
    

