 // for of loop 
//  ["","",""]
//  [{},{},{}]

const arr = [2,4,6,8]; 

// for (const val of arr) {
//     console.log(val)
// }

// const greeting = "Hello Rohit"; 
// for(const greet of greeting){
//     console.log(greet);
// }

// Maps - The Map object holds the key-value pair and remember the original insertion order of the keys.

const map = new Map(); 
map.set('IN','India'); 
map.set('USA','United State of America'); 
map.set('FR','France'); 

console.log(map.get('IN'));
console.log(map);

for(const [key,value] of map){
    console.log(` ${key} :- ${value}`);
}

const myObject = {
    'game1' : 'BGMI',
    'game2' : 'FreeFire',
    'game3' : 'Need For Speed'
}
// for of loop is not working in objects, it is not iterable 
// for(const [key , val] of myObject){
//     console.log(key);
// }

// we use for in loop for object 
console.log("------------------------------------")
for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`);
}

console.log("------------------------------------")
const programming = ['java','cpp','js','ruby','node'];
for(const key of programming){
    console.log(key);
}

const myMap = new Map(); 
myMap.set('.cpp', 'c++')
myMap.set('.js' , 'JavaScript')

for(const [ext, lang] of myMap){
    console.log(`The extension of '${lang}' is '${ext}'`);
}

console.log(NaN !== NaN)