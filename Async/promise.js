

function register(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            return reject('Error occurred while registering');
            console.log("Register Successfully");
            // resolve();
        },2000);
    });
    
}

function sendEmail(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Send Email Successfully");
            resolve();
        },1000);
    });
    
}

function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Login Successfully");
            resolve();
        },1000);
    });
    
}

function getUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Get User Data Successfully");
            resolve();
        },1000);
    });
}

function displayUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Display User Data Successfully");
        },500);
    });
    
}

register()
    .then(sendEmail)
    .then(login)
    .then(getUserData)
    .then(displayUserData)
    .catch((err) =>{
        console.log(`Error: ${err}`);
    });


console.log('Some Other Tasks Completed');