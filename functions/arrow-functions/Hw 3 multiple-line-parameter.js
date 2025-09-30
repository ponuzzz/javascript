
const addAndMultiply = (a, b, c) => {

    let num = a + b + c;
    num += 10;
    num -= 2;
    num *= 3;
    return num;

};
console.log("addAndMultiply 2 and 3 and 3:  ", addAndMultiply(2, 3, 3));
console.log("addAndMultiply 2 and 5 and 3: ", addAndMultiply(2, 5, 3));
console.log(" addAndMultiply4 and 6 and 5: ", addAndMultiply(4, 6, 5));
console.log("addAndMultiply 2 and 2 and 1: ", addAndMultiply(2, 2, 1));


