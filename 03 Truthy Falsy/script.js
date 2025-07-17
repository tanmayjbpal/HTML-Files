console.log('Truthy and Falsey');

let myName;
console.log(myName);
console.log(typeof myName);

if (myName) {
    console.log('Print my Name', myName);
}else {
    console.log('Name is not Defined Correctly');
}


let mySalary = 0;
console.log(mySalary);
console.log(typeof mySalary);

if (mySalary) {
    console.log('Print my Salary', 0);
}else {
    console.log('Salary must be greater than 0.');
}


console.log('value of true', true);
console.log('value of false', false);