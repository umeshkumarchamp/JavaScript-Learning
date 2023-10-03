

function register(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            // return reject('Error occurred while registering');
            console.log("Register Successfully");
            resolve();
        },2000);
    });
    
}

function sendEmail(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            return reject(`Could not send email`);
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
            resolve();
        },500);
    });
    
}

async function authenticate(){

    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    // try{
    //     await register();
    //     await sendEmail();
    //     await login();
    //     await getUserData();
    //     await displayUserData();
    // }catch(err){
    //     // console.log(`Error: ${err}`);
    //     throw new Error(err);
    // }
    
}
authenticate().then(()=>{
    console.log('User Authentication Successfully');
}).catch((err)=>{
    console.log(`Error: ${err}`);
});

console.log('Some Other Tasks Completed');