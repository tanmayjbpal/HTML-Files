console.log('JS Spread Operator');
let number1 = [1,2,3];
let number2 = [4,5,6];

//Concatenation of Array.
let combineArray = [...number1, ...number2];
console.log("number1", number1)
console.log("number2", number2)
console.log("combineArray", combineArray)

//Expand the String
let myName = "My Name is Ankit";
console.log(myName);
console.log("Expand the String", ...myName); //It will Break down the String into Single Characters.
console.log([...myName]); //It will Break down the String into Single Characters.

// Add elements in Array, we can also use Push() method to add elements in the Array.
number1 = [...number1, 10, 11, 12];
console.log('number1', number1);

number1 = [13, 14, 15, ...number1];
console.log('number1', number1);

number1 = [40, 41, 42, ...number1, 100, 101, 102];
console.log('number1', number1);

//Concatenate the Object
let myObj1 = {fName: 'Ankit', skills: ['JS', 'LWC', 'Apex'] };
let myObj2 = {lName: 'Jain', country : 'India' };
let finalObject = {...myObj1, ...myObj2};
console.log('finalObject', finalObject);

//Copy an Array and Object.
let myFavFruits = ['Apple', 'Grapes', 'Banana'];
//If we don't use Spread Operator to Copy then What Happens
let myFavFruitsCopy = myFavFruits; // Deep Copy
console.log('myFavFruits', myFavFruits);
console.log('myFavFruitsCopy', myFavFruitsCopy);

myFavFruitsCopy.push("Cherry");
console.log('myFavFruitsCopy', myFavFruitsCopy);
//But the Problem is as soon as we modify the Copied array our Orginal Array also gets Impacted.
//We are not Modifying our Original Array, here we had Modified only our Copied Array
//But still our Original Array gets Modified as we Copied the array Directly from Original Array Without using Spread Operator.
console.log('myFavFruits', myFavFruits);// My Orginal Array gets Impacted/Modified and It is referred as Deep Copy in JS.

//To Avoid this Behavior (Deep Copy) we have to Copy the Array like this using Spread Operator.
let myFavFruits1 = ['Apple', 'Grapes', 'Banana'];
let myFavFruitsCopy1 = [...myFavFruits1]; // Shallow Copy
console.log('myFavFruits1', myFavFruits1);
console.log('myFavFruitsCopy1', myFavFruitsCopy1);

myFavFruitsCopy1.push("Cherry");
console.log('myFavFruitsCopy1', myFavFruitsCopy1);
console.log('myFavFruits1', myFavFruits1)

//The Above Analogy is exactly Same for Object as well.

let myDetails1 = {fName : 'Ankit', lName : 'Jain'};
let myDetailsCopy1 = myDetails1; //Deep Copy
myDetailsCopy1.age = 75;
console.log('myDetails1', myDetails1);
console.log('myDetailsCopy1', myDetailsCopy1);

let myDetailsA = {fName : 'Ankit', lName : 'Jain'};
let myDetailsCopyA = {...myDetailsA}; //Shallow Copy
myDetailsCopyA.age = 75;
console.log('myDetailsA', myDetailsA);
console.log('myDetailsCopyA', myDetailsCopyA);







