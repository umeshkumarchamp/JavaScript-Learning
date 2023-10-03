// Higher Order Arrays Loops 

// for of loop 

// ["a", "b", "c", "d"]
// [{},{},{},{},{},{}]

const arr = [1,2,3,4,5,6];

for (const iterator of arr) {   
    console.log(iterator);
}

let greeting = 'Ye Duniya Meri Hai';
for(const greet of greeting){
    if(greet == ' '){
        continue;
    }
    console.log(greet);
}

const users = [
    {'id': 101, 'name': 'Umesh Kumar', 'email': 'umesh@gmail.com'},
    {'id': 102, 'name': 'Dinesh Kumar', 'email': 'dinesh@gmail.com'},
    {'id': 103, 'name': 'Rajpal Yadav', 'email': 'rajpal@gmail.com'}
]

const map = new Map();
map.set('users', users);
console.log(map.get('users')[2].name);

