

let currentDate = new Date();
console.log("Date:",currentDate.getDate());
console.log("month:", currentDate.toLocaleString('default', {month:'long'}));
console.log("Seconds:",currentDate.getSeconds());
console.log("Time:",currentDate.toLocaleString());
console.log("Hours:",currentDate.getHours());
console.log("mileseconds:",currentDate.getMilliseconds());
console.log(currentDate.getFullYear());

