const Prompt = require("prompt-sync")();
let months = prompt("enter the a months:");

switch (months) {
    case "1":
          console.log("janauray");
           break;
     case "2" :
        console.log("febuary");
        break;

    default:
        console.log("regular day");
        
        break;
}



