

//function greet({name,age}) {
  //  console.log(`hello, ${name}! you are ${age} years old`);
    
    
//}
//const user={
  //  name:"popps",
    //age:90,
    //city:"india"
//}
//greet(user);





function lock({name,age,city}) {
    console.log(`hello,${name} you are ${age} years old at ${city}`);
    
}
const caps ={
    name :"sreelakshmi",
    age:20,
    city:"kenchira"
}
lock(caps);


// Function with parameter destructuring
function describeFlower({ name, color, fragrance }) {
  console.log(`The ${name} is ${color} and has a ${fragrance} fragrance.`);
}

// Create a Jasmine flower object
const flower = {
  name: "Jasmine",
  color: "white",
  fragrance: "sweet",
  petals: 5 // extra property (not used)
};

// Call the function
describeFlower(flower);





