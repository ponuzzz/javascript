//callback functions are functions that are passed as arguments to another functions.
//handled asynchronous operations
// avoid blocking code expression.

//this is opur callback function
function greetUser(name){
     console.log(`HELLO, ${name} !`);
     
}
//this function takes another function (callback) as an argument
function gettUserInput(callback){
      const name = "minnu" ; //simulating user input
      callback(name)
}
 gettUserInput(greetUser);