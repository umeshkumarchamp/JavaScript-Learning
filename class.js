class User{
    name; 
    age; 
    phone;
    constructor (name,age,phone){
        this.name = name; 
        this.age = age; 
        this.phone = phone;
    }
    introduceSelf(){
        const user = {
            name : this.name, 
            age : this.age, 
            phone : this.phone
        }
        console.log(`Your Name : ${user.name} \nYour Age : ${user.age} \nYour Phone : ${user.phone}`);
    }

    createTable(){
        for(let i=1; i<=10; i++){
            console.log(`5 x ${i} = ${i*5}`)
        }
    }
}
const obj = new User('Rohit',24,6201033951); 
// obj.introduceSelf();
// obj.createTable();


class Car{

    constructor(name, year){
        this.name = name; 
        this.year = year; 
    }

    getCarAge(){
        const date = new Date(); 
        const details = {
            'Car Model' : this.name, 
            'Car Issuing Year' : this.year,
            'Car Age' : date.getFullYear() - this.year
        }
        console.log(details);
    }
}
// const car = new Car('Audi',2018); 
// car.getCarAge();

class Student{
    constructor(dob){
        this.dob = dob; 
        console.log(`Your DOB : ${this.dob}`);
    }

    getAge(){
        const dateOfBirth = new Date(this.dob);
        const currentDate = new Date();
        const yearDiff = currentDate.getFullYear() - dateOfBirth.getFullYear();
        // Check if the birthday for this year has already occurred
        if (currentDate.getMonth() < dateOfBirth.getMonth() || (currentDate.getMonth() === dateOfBirth.getMonth() && currentDate.getDate() < dateOfBirth.getDate())) {
            return yearDiff - 1; // Subtract 1 if the birthday hasn't occurred yet this year
        } else {
            return yearDiff;
        }
    }
}

// const std = new Student('2000-09-02'); 
// const age = std.getAge();
// console.log(age); 

module.exports = Student;

