console.log('Assignment JS');
/*
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World

Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"

Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ

Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]

Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]

Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

//1.
const capitalizedFirstLetter = (inputString) => {
    let convertedArray = inputString.split(" ");
    let convertedMap = convertedArray.map((currItem) => currItem[0].toUpperCase() + currItem.slice(1))
    
    let resultString = convertedMap.join(' ');
    console.log(convertedArray);
    console.log(convertedMap);
    console.log(resultString);

    //Now Single Line of Code that Senior Developers Prefers.
    let output = inputString.split(" ").map((currItem) => currItem[0].toUpperCase() + currItem.slice(1)).join(" ");
    console.log('output', output);
}
capitalizedFirstLetter("hello world welcome to learn salesforce");


//Most modified Code.
const capitalizedFirstLetter1 = (inputString) => inputString.split(" ").map((currItem) => currItem[0].toUpperCase() + currItem.slice(1)).join(" ");

console.log( capitalizedFirstLetter1("hello world welcome to learn salesforce") );

//2.

const reverseStringWithCase = (inputString) => {
   let inputArray =  inputString.split("");
   console.log('inputArray', inputArray);

   let reversalArray = inputArray.reverse();
   console.log('reversalArray', reversalArray);

   let output = reversalArray.join("");
   console.log('output', output);

   //Now Single Line.
   let result = inputString.split("").reverse().join("");
   console.log('result', result);
}
reverseStringWithCase("Hello World");

//Most modified Code.
const reverseStringWithCase1 = (inputString) => inputString.split("").reverse().join("");

console.log( reverseStringWithCase1("Hello World") );

//3.

const countCharacters = (inputString) => {
    console.log("inputString", inputString.split(''));

    let output = {};

    let inputArray = inputString.split('');
    for(let currItem of inputArray){
        console.log("currItem", currItem);

        if(output.hasOwnProperty(currItem)){
             output[currItem] = output[currItem] + 1;
        }else{
            output[currItem] = 1;
        }

    }
    console.log("output", output);
}

countCharacters('hello');


//4.

const generateUsername = (inputString) => {
    let upperCase = inputString.toUpperCase();
    console.log("upperCase", upperCase);

    let inputArray = upperCase.split(" ");
    console.log("inputArray", inputArray);

    let initialsArray = inputArray.map( (currItem) => currItem[0]);
    console.log("initialsArray", initialsArray);

    let output = initialsArray.join("");
    console.log("output", output);

    //Now Single Line.
    let result = inputString.toUpperCase().split(" ").map((currItem) => currItem[0]).join('');
    console.log("result", result);
}

generateUsername('ankit Dilipji Jain');

//Most Modified Code.
const generateUsername1 = (inputString) => inputString.toUpperCase().split(" ").map((currItem) => currItem[0]).join("");

console.log(generateUsername1('ankit Dilipji Jain'));

//5. Already Covvered in Previous Session (Day 9).
//6. Already Covvered in Previous Session (Day 9).



