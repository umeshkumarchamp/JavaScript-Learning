const coding = ['Java','C++','Python','JavaScript','Node']; 

// coding.map((lang,val)=>{
//     if(val ==2){
//         console.log(`Value of index ${val} is ${lang}.`);
//     }
// });
// coding.forEach(function(item){
//     console.log(item);
// });
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((element, index, arr)=> {
    console.log(element, index, arr);
});

const myCode = [
    {
        'language' : 'Java',
        'extension' : '.java',
    },
    {
        'language' : 'JavaScript',
        'extension' : '.java'
    },
    {
        'language' : 'C++',
        'extension' : '.cpp'
    }
]
console.log(myCode)

console.log('------------------- forEach Loop --------------')
myCode.forEach((val,index,arr)=>{
    console.log(val, index);
})

console.log('---------------- using Map Function ---------------'); 
myCode.map((val,index, arr)=>{
    console.log(`The extension of ${val.language} is ${val.extension}`)
});
