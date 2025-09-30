//sort array elements in ascending or descending.

let nums = [10,1,21,2];
nums.sort();
console.log(nums);

//numeric sort - ascending order

const numbers1 =[4,2,5,1,3];
numbers1.sort((a,b) => a-b);
console.log(numbers1);

//
const numbers2 =[4,2,5,1,3];
numbers1.sort((a,b) => b-a);
console.log(numbers2);

//default string sort(ascending)
let fruits = ["banana","apple","grapes","cherry"];
fruits.sort();
console.log(fruits);

//descending
let fruits2 =["banana","apple","cherry","dates"];
fruits2.sort((a,b) => a.localeCompare(b))
console.log(fruits2);



