
//reduce-right processes elements from right to left.return the accumulated value.

const sum = [1,2,3,4,5].reduceRight((acc,num) => acc +num,0)
console.log(sum);


//filter returns elements that match a condition

const number = [2,3,4,5,6,7,9].filter(num => num  % 3 == 0);
console.log(number);

