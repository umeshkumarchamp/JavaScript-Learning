// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// console.log(posNumbers);

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//     const myArray = [];
//     for (const x of numbers) {
//       if (callback(x)) {
//         myArray.push(x);
//       }
//     }
//     return myArray;
//   }

// function myDisplayer(something) {
//     console.log(something)
//   }
  
//   function myCalculator(num1, num2, myCallback) {

//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);

function doSomethingAsync(callback) {

//   setTimeout(function() {
    console.log("Task is done!");
    callback(); // Call the provided callback function
//   }, 1000);
}

function onComplete() {
  console.log("Callback has been executed.");
}

doSomethingAsync(onComplete);

function calculate(n1,n2,callback){
    let res = n1+n2; 
    callback(res);
}

function result(r){
    console.log('result = ',r+2)
}

calculate(4,8,result)

console.log("==========================================\nQuestion 2. ")

function filter(){
    console.log("Done");
}

const myArr = [2,4,6,8]
function filterArray(myArr, callback){
    console.log(myArr);
    callback();
}
filterArray(myArr,filter);

/*
Node is written in JavaScript, so you should start by learning JavaScript. This means understanding scopes, functions, closures, module patterns, 
classes, promises, and callbacks, as well as the capabilities of Strings, Numbers, Arrays, Objects, Sets, and Maps.

*/


let n = -43; 
n = Math.abs(n); 
console.log(n); 

console.log(`=============================`);
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(` ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()} `); 
// }

// function fetchData() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         const data = 'Some fetched data';
//         resolve(data); // Fulfilled state
//       }, 1000);
//     });
//   }
  
//   function processData(data) {
//     console.log('Processed data:', data);
//   }
  
//   fetchData()
//     .then(processData)
//     .catch(function(error) {
//       console.error('An error occurred:', error);
//     });
  
function myDisplayer(some) {
    console.log(some);
  }

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  