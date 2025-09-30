//uesful when compartion a single value against multiple exacted matches

const prompt = require("prompt-sync")();

let day = prompt("enter a day:");

switch (day) {
    case "monday":
        console.log("started of work week");
        break;
    case "Friday":
        console.log("end of the week");
        break;
    case "sunday":
        console.log("weekend");
        break;


    default:
        console.log("regular day");

        break;
}

