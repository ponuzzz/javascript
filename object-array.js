//
const students = [
    {name :'athul', age:21,grade:'A'},
    {name: 'shul',age:90, grade:'B'}
]

//accessing dates
console.log(students[1].name);
console.log(students[0].age);

//loop through object array
students.forEach(student =>{
    console.log(`${student.name} is ${student.age}year old`);
    
})


