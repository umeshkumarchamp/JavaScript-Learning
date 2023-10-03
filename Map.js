const user = [
    {'name':'Rohit','address':'lalpur'},
    {'name':'Umesh','address':'ashok nagar'},
    {'name':'Ramu','address':'lalpur'},
    {'name':'Rohan','address':'ashok nagar'},
    {'name':'Arshad','address':'lalpur'},
    {'name':'Raju','address':'ashok nagar'},
    {'name':'Chandan','address':'lalpur'},
    {'name':'Ashutosh','address':'ashok nagar'},
    {'name':'Akshay','address':'lalpur'},
    {'name':'Avinash','address':'ashok nagar'},
];

console.log(user);

user.map((data,index)=>{
    if(data.address === 'ashok nagar'){
        console.log(data.name);
    }
});
