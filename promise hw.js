


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

