// aync-wait is synatactic sugar build on top of promise it  makes async-wait code looks and behaves like synchronous
// more readable and maintainable
//asyn marks a function that  return a promise
//await poss the function executed until a promise is resloved or (rejected)

 function fetchData(){
    return  new Promise((resolve) => {
      setTimeout(() =>{
        resolve("data loaded")
      },2000)
    })
 }

 async function getData() {
    console.log("start");

    const result = await fetchData();
    console.log(result);

    console.log("end");
}
 getData();