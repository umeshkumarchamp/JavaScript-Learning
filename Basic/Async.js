console.log("================ Call , Apply , bind  =============") ;

function abcd(a,b,c){
    console.log(this,a,b,c);
}

const obj = {name:"Umesh", age:23};

// abcd.call(obj,23,25,89);
// abcd.apply(obj,[23,62,11]);
let bindFunc = abcd.bind(obj,1,2,3);
bindFunc();



// Pure Function and Impure Functions 

function functionImpure(val){
    return Math.random(1,10)*val; 
}
let a = functionImpure(2);

console.log(a);