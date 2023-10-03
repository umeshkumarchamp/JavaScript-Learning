
//     console.log(greet);

const user = {
    name : 'John',
    age : 21,
}

const {name : fullName, age} = user; // destructuring 
// console.log(`Name : ${fullName}`); 
// console.log(`Age : ${age}`);

const data = ['Umesh Kumar', 21, 'Developer']; 
const [Name, Age, Profession] = data; 
console.log(`Name : ${Name}, age : ${Age}, profession : ${Profession}`);