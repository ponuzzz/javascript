
const  person = {
    name : "athulya" ,
    age : 20,
    isStudent : true
}
console.log(person.name);
console.log(person.age);

//adding datas
person.city = "koleri";
console.log(person);

//modify data
person.age = "21"
console.log(person);

//remove a property from an object
delete person.city
console.log("final person details is: ",person);



