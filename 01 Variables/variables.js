console.log('Variable Declaration.')

//Let 
//Let Keyword can be Updated (Re-assigned)
//Let Keyword cannot be re-declared.

let myName = 'Ankit';
console.log('myName' +myName)

//Let Keyword can be Updated (Re-assigned)
myName = 'Ankit Jain';
console.log('myName', myName)

//Let Keyword cannot be re-declared.
// let myName = 'Amit'

//Const
//Const Keyword Cannot be Updated (Re-assigned)
//Const keyword cannot be redeclared.

const myLastName = 'Jain';
console.log('myLastName', myLastName);

//Const keyword cannot be Updated (Re-assigned).
//myLastName = 'Ankit Jain'

//But Behaviour of Const for the Object or Array is quite different.
//We can change the element or property inside the Object but we cannot change the complete Object 
//i.e(Complete Re-assignment of Object or Array is not Possible with Const keyword) we get an error.
const myObject = {fName :'Ankit', lName : 'Jain'};
console.log(myObject)

myObject.fName = 'Amit';
console.log(myObject)

//i.e(Complete Re-assignment of Object or Array is not Possible with Const keyword) we get an error.
//myObject = {fName :'Nidhi', lName : 'Jain'};

//Const keyword cannot be redeclared.
//const myLastName = 'Nidhi Jain';

//Var
//Var Keyword can be Updated (Re-assigned).
//Var Kayword can be redeclared.
//Bad Practice (Not - Recommended) to Use Var.

var bootcamp = 'LWC';
console.log('bootcamp', bootcamp)

//Var Keyword can be Updated(Re-assigned).
bootcamp = 'LWC Day 3';
console.log('bootcamp', bootcamp)

//Var Keyword can be redeclared.
var bootcamp = 'Bootcamp LWC Day 3'
console.log('bootcamp', bootcamp)

//Var keyword having Global scope.
console.log(window.bootcamp);