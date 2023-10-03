
function readFileAsync(fileName, callback){
    console.log('Reading file .......');
    setTimeout(function(){
        if(fileName === 'example.js'){
            callback(null , 'File Found : ' + fileName);    
        }else{
            callback(new Error('File Not Found !'));
        }
        
    },2000);
}

readFileAsync('example.js', (error,data)=>{
    if(error){
        // console.log(`${error}`);
        console.log(`Error: ${error.message}`);
    }else{
        console.log(data);
    }
});
let a = 0; 
let b = 1;
console.log(1&&2);
