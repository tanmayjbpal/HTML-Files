console.log("Functions in JS.");

//Function Declaration i.e. Declare a Function in JS (old / Legacy way).
function calc1(number1, number2){
    let sum = number1 + number2;
    return sum;
}

//Function Expression. (recommended Way.)
let calc2 = function(number1, number2){
    let sum = number1 + number2;
    return sum;
}

//Calling the Functions.
let calc1result = calc1(10, 5);
console.log("calc1result", calc1result);

let calc2result = calc2(10, 5);
console.log("calc2result", calc2result);


// In case of Function Declaration we can call function Before Declaration this is called as Hoisting.
let calc11result = calc11(10, 5);
console.log("calc11result", calc11result);

function calc11(number1, number2){
    let sum = number1 + number2;
    return sum;
}// Hoisting

// But this is not Possible for Function Expression we get an Error ( Cannot access 'calc12' before initialization).
/*
let calc12result = calc12(10, 5);
console.log("calc12result", calc12result);

let calc12 = function(number1, number2){
    let sum = number1 + number2;
    return sum;
}
*/ 

//Rollof Parameters in Functions applied for both Function Declaration as well as Function Expression.
//i.e. Passing only One Parameter (applied for both Function Declaration as well as Function Expression).
let calcA = function(number1, number2){
    let sum = number1 + number2;
    return sum;
}

let calc3result = calcA(10);
console.log('calc3result', calc3result);// Result/output NaN

//Therefore, in order to handle NaN using if else Statement in order to get the proper output.
let calcB = function(number1, number2){
    if(number2){
        let sum = number1 + number2;
        return sum;
    }else{
        return number1;
    }
}

let calc4result = calcB(10, 5);
console.log('calc4result', calc4result);

let calc5result = calcB(10);
console.log('calc5result', calc5result);

//Arrow Function : ES6.
//Modifying calcB function into Arrow function.
let calcC = (number1, number2) => {
    if(number2){
        let sum = number1 + number2;
        return sum;
    }else{
        return number1;
    }
}

let calcCresult = calcC(10, 5);
console.log('calcCresult', calcCresult);

let greet = function(username){
    return `${username}, Welcome to learn JS.`;
}

let greetArrowFunction = (username) => {
    return `${username}, Welcome to learn JS.`;
}

console.log(greet('Ankit'));
console.log(greetArrowFunction('Amit'));

//Few benifit of writing Arrow function.
// When we have One Line of Statement then No need to Specify the Curly braces and return keyword.
let greetArrowFunction1 = (username) => `${username}, Welcome to learn JS.`;

console.log(greetArrowFunction1('Amit'));

//Without Parameter.
let welcomeMessage = () => 'Welcome to Learn JS.'
console.log(welcomeMessage());

//Callback function
function welcomeMe(name, callMe){
    console.log( `Hello ${name}`);
    callMe();
}

function greetMeToo(){
    console.log('Welcome to Tech Journey with Ankit.');
}

function goodBye(){
    console.log('See you in future Sessions of Bootcamp.');
}

welcomeMe('Ankit', greetMeToo);
welcomeMe('Ankit', goodBye);

//We rarely Used the above Senario of CallBack Function but we Heavily/Frequently Used the 
//CallBack Function in the below way in LWC:
setTimeout(() => {}, 1000 );