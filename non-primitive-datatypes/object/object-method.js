//we can store function inside objects that are called methods
//example -1
const car = {
    brand : "toyota" ,
    start : function(){
        console.log("car started");
        

    }

}
car.start();

//example-2 
// .this is keyword ,it refes the objects itself(use to acess  the property and methods)

const person = {
    name :"shilu" ,
    age :23,
    greet :function(){
        console.log(`HELLO, MY NAME IS ${this.name}`);
        
    }
}
person.greet();
