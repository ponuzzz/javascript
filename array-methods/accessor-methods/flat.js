//flatterns nested array into a single level array.(depth can be specified)

const nested = [1,[2,[3,[4]]]];

const  flat1 = nested.flat(2);
console.log(flat1);
