// determine the length of the array of string
console.log(`================ Map ==========================`);

const arrStr = ['india','china','america','dubai','africa']; 
const length = arrStr.map((val)=>val.length); 
console.log(length);

// determine even number using filter

console.log(`================ Filter ==========================`);
const myNum = [1,2,3,4,5,6,7,8,9,10]; 
const newNum = myNum.filter((num)=> {
    return num % 2 === 0;
});
console.log(newNum);

// determine total cost of all mobile devices
console.log(`================ Reduce ==========================`);
const mobiles = [
    {'id':1, 'mobileName':'samsung', 'price':5000},
    {'id':2,'mobileName':'iphone', 'price':8000},
    {'id':3,'mobileName':'redmi', 'price':10000},
    {'id':4,'mobileName':'realme', 'price':15000},
    {'id':5,'mobileName':'motorola', 'price':13000},
]; 

const totalCost = mobiles.reduce((sum, mob)=> mob.price + sum , 0 );
console.log(`Total cost of Mobiles : ${totalCost}`);

console.log(`================ Map with Filter ==========================`);
const users = [
    {'id':1,'name':'John', 'age':16},
    {'id':2,'name':'Mary', 'age':18},
    {'id':3,'name':'Peter', 'age':20},
    {'id':4,'name':'Lisa', 'age':22},
    {'id':5,'name':'Sarah', 'age':24},
    {'id':6,'name':'Nancy', 'age':26},
    {'id':7,'name':'Karen', 'age':28},
    {'id':8,'name':'Jennifer', 'age':30},
    {'id':9,'name':'Emily', 'age':32},
    {'id':10,'name':'Amy', 'age':34},
]

const filteredUsers = users.filter((user)=> user.age > 30).map((user)=>{
    console.log(`Name : ${user.name.toUpperCase()}, AGE : ${user.age}`)
});
// console.log(filteredUsers)

console.log(`================ Map with Reduce ==========================`);

const products = [
    {'id':1, 'mobileName':'samsung', 'price':5000},
    {'id':2,'mobileName':'iphone', 'price':8000},
    {'id':3,'mobileName':'redmi', 'price':10000},
    {'id':4,'mobileName':'realme', 'price':15000},
    {'id':5,'mobileName':'motorola', 'price':13000},
]; 
const initialValue = 0; 
const productCost = products.map((amount) => amount.price).reduce((sum, amount) => (sum + amount),initialValue); 

console.log(productCost);

console.log(`================ Filter with Reduce ==========================`);

const transaction = [
    {'type' : 'credit', 'amount':5000},
    {'type' : 'debit', 'amount':8000},
    {'type' : 'credit', 'amount':10000},
    {'type' : 'debit', 'amount':15000},
    {'type' : 'credit', 'amount':6000},
    {'type' : 'debit', 'amount':13000},
    {'type' : 'credit', 'amount':19000},
    {'type' : 'debit', 'amount':12000},
    {'type' : 'credit', 'amount':17000},
    {'type' : 'debit', 'amount':23000},
    {'type' : 'credit', 'amount':18000},
];

console.log("Transaction List : " );
console.log(transaction);
const filterTransaction = transaction.filter((transaction) => transaction.type === 'credit'); 
console.log(filterTransaction);

const creditCost = filterTransaction.reduce((acc, transaction) => acc + transaction.amount, initialValue); 
console.log(`Total Credited Amount : ${creditCost}`);

console.log(`================ Map, Filter, and Reduce Combined ==========================`);

const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(`Original Array :`, myArray);

const newArray = myArray.map((item) => item*2); 
console.log(`New Array :`, newArray);
const newArray2 = newArray.filter((item) => item > 10);
console.log("After Filter :", newArray2);

const newArray3 = newArray2.reduce((acc, item) => acc + item, initialValue);
console.log("After Reduce :", newArray3);

const oneLine = myArray.map((val)=>val*2).filter((val)=>val>10).reduce((acc,val)=> acc+val, initialValue);
console.log(`Single Line : ${oneLine}`);

console.log(`================ Map and Filter with Objects ==========================`);

const students = [
    {'name' : 'John', 'grades': [90,80,90,86] },
    {'name' : 'Mary', 'grades': [80,60,90,70] },
    {'name' : 'Peter', 'grades': [90,98,70,95] },
    {'name' : 'Lisa', 'grades': [89,90,80,60] },
];
const threshold = 80;
const studentsWithAverageAboveThreshold = students.map((student)=> {
    // console.log(student.name);
    const averageGrade = student.grades.reduce((acc, grade)=> acc+grade,0) / student.grades.length; 
    return {'name': student.name, averageGrade}
});

console.log(studentsWithAverageAboveThreshold);

console.log("Selected Students  : ");

const selectedStudents = studentsWithAverageAboveThreshold.filter((student)=>student.averageGrade > threshold);

console.log(selectedStudents);


console.log(`================ Question 9: Map and Filter with Strings ==========================`);

const arrOfStrings = ['India','Canada','France','Germany','Japan','Dubai','USA','America'];
console.log("Original Array ",arrOfStrings);
const filterData = arrOfStrings.filter((arr)=> arr.length <= 5); 
const filter = filterData.map((arr)=> arr.toUpperCase()); 

console.log("Filtered Data ", filter);

console.log(`================ Question 10: Filter and Reduce with Objects ==========================`);

const books = [
    {'title' : 'Java', 'pages' : 250},
    {'title' : 'C++', 'pages' : 300},
    {'title' : 'Python', 'pages' : 400},
    {'title' : 'PHP', 'pages' : 500},
    {'title' : 'JavaScript', 'pages' : 600},
    {'title' : 'C#', 'pages' : 700},
];
console.log('Original Book List : ', books);
const filteredBook = books.filter((book)=> book.pages > 300); 
console.log('Filtered Books : ', filteredBook);

const reducedBook = filteredBook.reduce((acc, book)=> acc + book.pages, 0);
console.log('Reduced Book : ',reducedBook);

console.log(`================ Question 11: Map, Filter, and Reduce Combined ==========================`);

/*
Given an array of objects representing products with name, price, and quantity properties, 
use map to create a new array of objects with the total price (price * quantity) for each product, 
filter to select only products with a total price greater than $100, 
and then use reduce to calculate the sum of the total prices of the selected products.
*/

const product = [
    {'name':'Samsung','price':9000,'quantity':5},
    {'name':'iPhone','price':10000,'quantity':3},
    {'name':'Redmi','price':12000,'quantity':6},
    {'name':'Realme','price':15000,'quantity':2},
    {'name':'Motorola','price':13000,'quantity':3},
]; 
console.log('Original Products List : ',product);

const mapProduct = product.map((product) => {
    return {
        'name': product.name,
        'totalPrice': product.price * product.quantity,
    }
}); 

console.log('Map Products : ',mapProduct);

const filterProduct = mapProduct.filter((product) => product.totalPrice > 50000);
console.log('Filter Products : ',filterProduct);


console.log("============= Question 12: Map with Nested Arrays ==============")

/*
Given an array of arrays where each inner array represents a student's grades, 
use map to create a new array of objects with studentName and averageGrade properties.
 Calculate the average grade for each student.
*/

const grades = [
    [90,80,90,86],
    [80,60,90,70],
    [90,98,70,95],
    [89,90,80,60],
];

console.log('Original Grades List : ',grades);

const studentObj = grades.map((grade,index)=>{
    const averageGrade = grade.reduce((acc, grade) => acc+grade,0) / grade.length; 
    return { studentName: `Student ${index + 1}`, averageGrade };
})

console.log(studentObj);

