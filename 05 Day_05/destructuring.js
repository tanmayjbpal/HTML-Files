console.log('Destructuring Assignment');

let myFruits = ['Apple', 'Cherry', 'Banana'];
//Extract/get Values from Array Before ES6 i.e Old/Traditional way
let myFruit1 = myFruits[0]; 
console.log(myFruit1);
let myFruit2 = myFruits[1]; 
console.log(myFruit2);
let myFruit3 = myFruits[2]; 
console.log(myFruit3);

//Now After ES6 we can Use Destructuring to get/Extract the values from Array in One Single Step.
let [myFruitA, myFruitB, myFruitC] = myFruits;
console.log('myFruitA', myFruitA);
console.log('myFruitB', myFruitB);
console.log('myFruitC', myFruitC);

let [myFruitP, myFruitQ] = myFruits;
console.log('myFruitP', myFruitP);
console.log('myFruitQ', myFruitQ);

let [myFruitX, , myFruitZ] = myFruits;
console.log('myFruitX', myFruitX);
console.log('myFruitZ', myFruitZ);

let myFruits1 = ['Apple', 'Cherry', 'Banana', 'Guava'];
let [myFruit11, , , myFruit12] = myFruits1;
console.log('myFruit11', myFruit11);
console.log('myFruit12', myFruit12);

//Now we want First two Fruits in Separate variable and rest of the fruits in the form of an Array.
let [fruit1, fruit2, ...restFruits] = myFruits1
console.log('fruit1', fruit1);
console.log('fruit2', fruit2);
console.log('restFruits', restFruits); //Here restFruits on LHS is Called as Rest Operator in JS.

//Destructuring an Object.
let myObject1 = {
    fName : 'Ankit', 
    lName : 'Jain', 
    doy: 1950
};

let {fName, lName, doy} = myObject1;
console.log('fName', fName);
console.log('lName', lName);
console.log('doy', doy);

let myObject2 = {
    fName1 : 'Nidhi', 
    lName1 : 'Jain', 
    doy1: 1955
};

let {fName1, doy1} = myObject2;
console.log('fName1', fName1);
console.log('doy1', doy1);

//JS also allows us to Rename the variable as well
let myObject3 = {
    fName2 : 'Amit', 
    lName2 : 'Jain', 
    doy2: 1955
};


let {fName2 : FirstName, lName2} = myObject3;
console.log('fName2', FirstName);
console.log('lName2', lName2);

//String Interpolation.
let myString1 = 'my name is';
let myString2 = 'Ankit';
let myString3 = 'I Stay in';
let myString4 = 'Pune';
let calculateAge = 2023 - 1950;
let myString5 = 'age is';

//Old/Traditional Approach
let myFinalString = 'my name is '+ myString2 + ' ' + myString3 + ' ' + myString4;
console.log(myFinalString);

//By Using String Interpolation / template literal we can Dynamically Prepare the String
let myFinalString1 = `my name is ${myString2}. I Sta'y in ${myString4} and my ag"e is ${2023 - 1950}`;
console.log('myFinalString1', myFinalString1);

let myName1 = 'My Name is Jayesh';
console.log(...myName1);
console.log(...myName1[0]);

console.log([...myName1]);
console.log([...myName1][0]);

let myName2 = 'My Name is Ankit Jain';
let myNameArray = myName2.split(" ");
console.log(myNameArray); 
console.log(myNameArray[0]); 
