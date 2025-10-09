//parent class
class Animal {
    constructor(name){
        this.name = name;
    }
 
   //method
    speak(){
        console.log(`${this.name} makes a sound`);
        
    }
}
//child class(inherit from animal)
class Dog extends Animal{
    constructor(name,bread){
        super(name);  //parent invoking we used(call the parent class constructor)
        this.bread = bread;
    }
    //override speak method(polyformism)
    speak(){
        console.log(`${this.name} ${this.bread} barks`);
        
    }
}
 
const dog = new Dog("rex", "germen shepered"); // instance of dog
dog.speak();