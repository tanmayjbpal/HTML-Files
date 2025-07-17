console.log('Logical Operators.')
//Arithmatic Operators.
let myNumbera = 10;
let myNumberb = 20;
console.log(typeof myNumbera, typeof myNumberb);
console.log(myNumbera + myNumberb);


let myNumber1 = 10;
let myNumber2 = '20';
console.log(typeof myNumber1, typeof myNumber2);
console.log(myNumber1 + myNumber2);
console.log(myNumber1 + Number(myNumber2)); // Number function will convert the String value into  Number.

//Before Performing the Conversion using Number fuction we have to validate whether the Value is Number or Not.
let myNumbera1 = 10;
let myNumbera2 = '20A';
console.log(typeof myNumbera1, typeof myNumbera2);
console.log(myNumbera1 + myNumbera2);
console.log(myNumbera1 + Number(myNumbera2)); // Result is Nan (Not a Number)Which is an Error as here Number fuction fails for myNumbera2
//So, Before using Number fuction we go and validate whether the Value is Number or Not to avoid Nan error.
// Therefore, to avoid this kind of error i.e Nan we have to Use isNaN function.

if(isNaN(myNumbera2)){
    console.log('myNumbera2 is not a Number thus Conversion is Not Possible.')
}else{
    console.log(myNumbera1 + Number(myNumbera2));
}

if(isNaN(myNumber2)){
    console.log('myNumber2 is not a Number thus Conversion is Not Possible.')
}else{
    console.log(myNumber1 + Number(myNumber2));
}

let myNumber3 = '30';
let myNumber4 = 10;
console.log(typeof myNumber3, typeof myNumber4);
console.log(myNumber3 - myNumber4);// JS internally performs the Conversion for myNumber3 into Number and do Subtraction.
// (It will not happen (JS fails to do internal conversion) for + symbol because there are two Possibilities either concatenate or Addition). 
console.log(myNumber3 + myNumber4)
console.log(Number(myNumber3) + myNumber4);
// JS internally performs the Conversion for Sub, Multiply and Division.
console.log(myNumber3 * myNumber4);
console.log(myNumber3 / myNumber4);


//Assignment Operator "="

let myNumber5 = 50;
myNumber5 = 60;
console.log('myNumber5', myNumber5)

//Comparison Operator >, >=, <, <=,!=, ==, ===
let myNumber6 = 10;
let myNumber7 = 20;
console.log(myNumber6 > myNumber7)
console.log(myNumber6 < myNumber7)

//Logical Operators (&&, ||, !)

console.log(true && false);
console.log(true && true);
console.log(myNumber6 > 0 && myNumber6 > 5)

let myString1 = 'Ankit';
let myString2 = 'Jain';
console.log(myString1 && myString2);//Jain


console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(myNumber6 > 0 || myNumber6 > 5)
console.log(myString1 || myString2);//Ankit

let isSalaryCredited = false;
console.log('isSalaryCredited', isSalaryCredited);
//isSalaryCredited = true; we can also use this
isSalaryCredited = !isSalaryCredited;
console.log('isSalaryCredited', isSalaryCredited);

//Ternary Operator

let age = 21;
let output = age < 18 ? 'Too Young' : 'Old Enough';
console.log(output);

let output1;
if(age < 18) {
    output1 = 'Too Young';
    console.log('output1', output1);
}else{
    output1 = 'Old Enough';
    console.log('output1', output1);
}


/////////////////////

//Diff bet "==" vs "==="

// == Only Check for value
// === check for value and datatype
let numbera1 = 3;
let numbera2 = 3;
console.log(typeof numbera1, typeof numbera2);
console.log(numbera1, numbera2);
console.log(numbera1 == numbera2);
console.log(numbera1 === numbera2);

let number10 = 3;
let number11 = "3";
console.log(typeof number10, typeof number11);
console.log(number10, number11);
console.log(number10 == number11);
console.log(number10 === number11);

console.log('ankit' == 'Ankit'); //false as JS is case Sensitive.
console.log('ankit' === 'Ankit');

//null vs undefined
let myString09 = 'Ankit';
// There are two Options to make the variable empty.
//option 1, mysTring09 = undefined;
//option 2, myString09 = null; (this one is recommended)

let myString10 = null;
let myString11;

console.log(typeof myString10, typeof myString11);
console.log(myString10 == myString11);
console.log(myString10 === myString11);







