
// Login System 
const readline = require('readline');
const users = [
    {
        "username":"umesh123",
        "password":"123"
    },
    {
        "username":"rohit123",
        "password":"567"
    }
]; 

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
// console.log(users.find(users => users.username === 'rohit123'))

function login (username, password){
    const user = users.find(users => users.username === username && users.password === password); 
    if(user){
        console.log(`Welcome ${user.username} , You have been LogIn Successfully. `)
    }else{
        console.log(`Something went wrong ! Please try again......`)
    }
}

// Take user input for login
rl.question('Enter your username: ', username => {
    rl.question('Enter your password: ', password => {
      rl.close();
      login(username, password);
    });
  });
// login('umesh123','1237')


