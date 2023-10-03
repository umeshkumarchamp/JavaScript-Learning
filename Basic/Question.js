function oddEven(num){
    if(num % 2 == 0){
        console.log(`${num} is an even number`);
    }else{
        console.log(`${num} is an odd number`);
    }
}

oddEven(35);

function gradeCalculator(score){
    if(score >= 90 && score <=100){
        console.log(`Your grade is A `);
    }else if(score >=75 && score < 90){
        console.log(`Your grade is B`);
    }else if(score >= 60 && score < 75){
        console.log(`Your grade is C`);
    }else if(score >=45 && score < 60){
        console.log(`Your grade is D`);
    }else if(score >=1 && score < 45){
        console.log(`You are Fail !!`);
    }else{
        console.log(`Please insert valid score value !`);
    }
}
gradeCalculator(-89);

function sumOfDigits(num){
    let sum = 0; 
    while(num > 0){

        // sum = sum + num%10; 
        console.log(`${sum} + ${num%10} = ${sum+num%10}`);
        sum = sum + num%10; 
        num = Math.floor(num/10);
        // console.log(num);
        // console.log(sum);
        // num = 0;
    }
    console.log(`Sum: ${sum}`);
}

sumOfDigits(257);

