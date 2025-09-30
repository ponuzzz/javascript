// promise is in js an objects that represented in the eventscompleting(or failure)of an asynchronous operations an its resulting value
//const promise = new promise((reslove,reject)) = >{
// asynchronous operation})
// resolve  (value) called when the operation is suceess
//reject(error) called when the operation is failed.


//creating promise

let myPromise = new Promise((resolve , reject) =>{
    let success = true;

    setTimeout(() =>{
        if(success){
            resolve("promise resloved successfully")
        }else{
            reject("promise rejected")
        }
    },2000)


})
myPromise
.then(result => console.log(result))//runs promise is resolved
.catch(error => console.log(error))//runs promise is rejected
.finally(() => console.log("promise execution finished"))


