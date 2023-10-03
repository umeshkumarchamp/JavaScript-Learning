// Switch Case 

const month = 10; 
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break; 
    case 3:
        console.log("March");
        break; 
    case 4:
        console.log("April");
        break; 
    case 5:
        console.log("May");
        break; 
    case 6:
        console.log("June");
        break; 
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break; 
    case 9:
        console.log("September");
        break; 
    case 10:
        console.log("October");
        break; 
    case 11:
        console.log("November");
        break; 
    case 12:
        console.log("December");
        break; 
    default:
        console.log("Invalid Input");
        break; 
}

const person = {
    'name': 'John',
    'email': 'john@example.com',
}
// console.log(Object.keys(person).length);
console.log(Object.keys(person));

let val; 
let a; 
let b = 90;
console.log(val ?? a ?? b); 

// Ternary Operators

const age = 28; 

age >= 18 ? console.log(`You are eligible for voting`) : console.log('You are not eligible for voting');


// For Loop with break and continue 

for (let i = 2; i <=5; i++) {
    console.log(`Table of : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop : ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

const array = ['japan', 'china','america', 'india', 'europe'];
let element = [];
for (let index = 0; index < array.length; index++) {
    console.log(`${array[index]}`);
    if(array[index] === 'india') {
        console.log(`Welcome to ${array[index].toUpperCase()}`);
        break;
    }
    // element[index] = array[index];
    // console.log(element);
}   

for (let index = 0; index <=10; index++) {
    if(index === 5){
        console.log('5 is Detected');
        continue;
    }
    console.log(`The Value of i = ${index}`)   
}
// While Loop 
console.log('============================ While Loop =============================');

let country = ['japan','europe','america','india','china','sri lanka','austria'];
let index = 0;
while(index < country.length){
    console.log(`Country at index ${index} = ${country[index]}`);
    index++;
}

let score = 1;
do {
    console.log(score);
    score++;
} while (score <=10);
