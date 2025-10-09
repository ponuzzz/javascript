const numbers = [1,2,4,9,12,80];

// basic destructuring

const [a, b] = numbers;
console.log(a);
console.log(b);



//skipping values
const [ , , c] = numbers;
console.log(c);


//using rest operator
const [x,...rest] = numbers;
console.log("x is :",x);
console.log("rest is :",rest);




