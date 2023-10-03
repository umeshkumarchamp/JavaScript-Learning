

function register(callback){
    setTimeout(function(){
        console.log("Register Successfully");
        callback();
    },2000);
}

function sendEmail(callback){
    setTimeout(()=>{
        console.log("Send Email Successfully");
        callback();
    },4000);
}

function login(callback){
    setTimeout(()=>{
        console.log("Login Successfully");
        callback();
    },2000);
}

function getUserData(callback){
    setTimeout(()=>{
        console.log("Get User Data Successfully");
        callback();
    },1000);
}

function displayUserData(){
    console.log("Display User Data Successfully");
}

register(function(){
    sendEmail(() => {
        login(()=>{
            getUserData(()=>{
                displayUserData();
            });
        });
    });
});



console.log('Some Other Tasks Completed');