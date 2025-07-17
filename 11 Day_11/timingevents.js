console.log("JS Timing Events");

setTimeout(() => {
    console.log("Timeout Done");
}, 5000);
/*
setInterval(() =>{
    console.log("TimeInterval Done 1. ");
}, 5000);
*/
// Now if we want to Stop the setInterval method from executing continuously i.e after 15 seconds.
let intervalDetails = "";

intervalDetails = setInterval(() =>{
    console.log("TimeInterval Done 2.");
}, 5000);

setTimeout(() =>{
clearInterval(intervalDetails);
console.log("Interval Processing Stop.");
}, 15000)



let  intervalCount = 0;
let  timeoutCount = 0;

function intervalFunction() {
    intervalCount++;
    console.log(`Interval tick : ${intervalCount}`);
    if(intervalCount === 5){
        clearInterval(intervalId);
    }
}

function timeoutFunction() {
    timeoutCount++;
    console.log(`Timeout tick : ${timeoutCount}`);
    if(timeoutCount === 3){
        clearInterval(timeoutId);
    }
}

const intervalId = setInterval(intervalFunction, 1000);
const timeoutId = setTimeout(timeoutFunction, 500);

console.log("Start");

//Q. What will be the First line of Output ? ans : Start
//Q. What will be the Output of intervalFunction? 
//Q. What will be the Output of timeoutFunction?
//Q. What will be theLast Line of Output? ans : Interval Tick : 5


//Performing the import Operations from importexport.js file
import doMul, { weekdays, DATE_OF_BIRTH_YEAR, sayHi, doAdd } from "./importexport.js";
//Here we can't put doMul inside the Curly braces because it is an Default Export
//Therefore we have to kept it outside the Curly braces. 
console.log('weekdays', weekdays);
console.log('DATE_OF_BIRTH_YEAR', DATE_OF_BIRTH_YEAR);
sayHi("Welcome to Learn JS");
doAdd(10, 15);
doMul(10, 15);

// Now if we want to import Everything at one single shot.
import * as lwcbootcamp from './importexport.js';

console.log('weekdays', lwcbootcamp.weekdays);
console.log('DATE_OF_BIRTH_YEAR', lwcbootcamp.DATE_OF_BIRTH_YEAR);
lwcbootcamp.sayHi("Welcome to Learn JS");
lwcbootcamp.doAdd(10, 15);
// lwcbootcamp.doMul(10, 15);
//Here we can't specify like this as it is a default export.
//so, for default export we have to import separately shown below.

/*
import doMul from './importexport.js';
doMul(10, 15);
*/




