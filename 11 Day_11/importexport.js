console.log("JS Imports and Exports.");

// Export during Declaration.
export let weekdays = ['Mon', 'Tue', 'Wed'];
export const DATE_OF_BIRTH_YEAR = 1947;
export function sayHi(message){
    alert(message);
}

//Export after declaration.
function doAdd(number1, number2){
    alert(number1 + number2);
}
export {doAdd};

//Default Export we can have only one per JS file.
export default function doMul(number1, number2){
    alert(number1 * number2);
};


// Now performing the import operations from this file to timingevents.js file.