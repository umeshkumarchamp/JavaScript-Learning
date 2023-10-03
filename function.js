
// IIFE (Immediately Invoked Function Expression) with arrow function 
(()=>console.log("This is Rohit "))();

((a)=> {
    for(let i=1; i<=10; i++){
        console.log(`${a} x ${i} = ${a*i}`)
    }
})(2);


/* 
Undefined means a variable has been declared but has yet not been assigned a value.
Null is an assignment value. 
It can be assigned to a variable as a representation of no value.

*/
let val; 
console.log(val);
val = null; 
console.log(val);
val = 34; 
console.log(val);

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
console.log(factorial(3)); // 6

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)

// console.log(newArr);

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)
// console.log(newArr)
// function myFunction(num) {
//   return num * 10;
// }
