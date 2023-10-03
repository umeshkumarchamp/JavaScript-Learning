// Higher Order Functions :- Functions which accept a function in a parameter or return a function or both 

function sayHi(val){
    console.log("Hi", val());
}
sayHi(function(){return "Umesh";});

// or
function sayHello(){
    return function (){return "Champ"; };
}

var sayHello = sayHello();
console.log("Hello", sayHello());

// let arr = [1,2,3,4,5,6,7,8,9]; 
// arr.forEach((val)=>{
//     console.log(val);
// })

function buscuit(h,w,c){
    this.h = h;
    this.w = w;
    this.c = c;
    // console.log(this);
}
var b1 = new buscuit(5,3,'Brown');
let b2 = new buscuit(8,2,'Yellow');
console.log(b1);
console.log(b2);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Define the getDetails method on the Person prototype
Person.prototype.getDetails = function() {
    console.log(`Your Name: ${this.name}, Your age: ${this.age}`);
};

const umesh = new Person('Umesh', 23);
const dinesh = new Person('Dinesh', 25);

umesh.getDetails(); // Call the getDetails method on umesh
dinesh.getDetails(); // Call the getDetails method on dinesh

// First Class Functions 

function getTime(){
    console.log('Time:'+Date.now());
}
// setInterval(getTime,1000);

// new Keyword 
function Student(name){
    this.name = name;
}

let s1 = new Student('Umesh');
console.log(s1);

// IIFE

(()=>{
    console.log('Mai Hu : IIFE');
})();

// var a = 2; 
(()=>{
    var a = 3; 
    console.log(a);
})();

var ans = (function(){
    var privatal = 88; 

    return {
        getter:function(){
            console.log(privatal);
        },
        setter : function(val){
            privatal = val; 
        }
    }
})();
console.log(ans.getter());
ans.setter(99);
console.log(ans.getter());

// Prototype 
function Country(country,city){
    this.country = country; 
    this.city = city;
}
Country.prototype.getCountry = function(){
    console.log(`${this.city} is the capital of ${this.country}.`)
}

let c1 = new Country('India','New Delhi');
let c2 = new Country('USA','Canada');

c1.getCountry();
c2.getCountry();

let School = {
    "school_name" : "St Louis High School",
    address : "Harmu Ranchi",
}

let StudentofLouis = {
    name : "Gautam",
    age : 23,
}

StudentofLouis.__proto__ = School;
console.log('================================================================');
console.log(StudentofLouis.school_name);
console.log(StudentofLouis.address);
console.log('================================================================');

let obj = {
    display: function(){
        if(obj === this){
            console.log(this);
        }
    }
}
obj.display();