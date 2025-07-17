console.log('Debugging in JS');

function calculateSum(arr){
    //debugger; This Keyword is used for Debugging Purpose in JS.
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
const total = calculateSum(numbers);
console.log("Total", total);

//Debugging done by using Brakpoints because in QA and UAT we can't change the code.
//Go to Sources Tab then ctrl+p and search for JS file.
const x = 10;
if(x === 5){
    console.log("x is equal to 5");
}else{
    console.log("x is not equal to 5");
}

/*
//Error : Incorrect function call inside setTimeout
function displayMessage(message){
    console.log("Message : ", message);
}

const greeting = "Welcome !";
setTimeout(displayMessage(greeting), 2000);


//Error : Incorrect function call inside setTimeout
function displayMessage1(message){
    console.log("Message : ", message);
}

const greeting1 = "Welcome !";
setTimeout(() => displayMessage1(greeting1), 2000);
//Solution : use an arrow function to wrap the function call.

*/


async function load() {
  //debugger;
  const allPromise = Promise.all([
    resolveTimeout(["potatoes", "tomatoes"], 1000),
    resolveTimeout(["oranges", "apples"], 1000),
  ]);

  // wait..
  const lists = await allPromise;

  // after 1 second
  console.log(lists);
  // [["potatoes", "tomatoes"], ["oranges", "apples"]]
}

load();

function resolveTimeout(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

function rejectTimeout(reason, delay) {
  return new Promise((r, reject) => setTimeout(() => reject(reason), delay));
}


