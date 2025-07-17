console.log('Array Methods in JS.');

let myCars = []; //Empty array.
console.log("myCars", myCars);
console.log("typeof myCars", typeof myCars);


let myCars1 = ['BMW', 'Audi', 'Ferrari', 'Volvo']; 
console.log("myCars1", myCars1);
console.log("typeof myCars1", typeof myCars1);

//How to Access the Values from an Array.
console.log(myCars1[0]);
console.log(myCars1[2]);

//How many Entries/Elements are available/present inside an Array.
console.log(myCars.length);
console.log(myCars1.length);

//How to add Elements inside an Array.
//To add Elements inside an Array we have different methods :
//1. push: It will add Element at End of an Array.
//2. unshift : It will add Elements at the begining of an array.
//3. spread Operator : Already Discussed Earlier in details. It is More Flexible than Push and unshift.
//By Using Spread Operator we can add Entires / elements both at end, begining and at the Middle of an Array.

myCars1.push('Hyundai');
console.log("myCars1", myCars1);

myCars1.unshift('TATA');
console.log("myCars1", myCars1);

myCars1 = ['Honda', ...myCars1, 'Maruti'];
console.log("myCars1", myCars1);

//Remove Elements from an Array.
//1. pop : It will remove the Element from the End of an Array and return the Removed Element.
//2. shift : It will remove the Element from the begining of an Array and return the Removed Element.

console.log("myCars1", myCars1);

let popItem = myCars1.pop();
console.log('popItem', popItem);
console.log("myCars1", myCars1);

let shiftItem = myCars1.shift();
console.log('shiftItem', shiftItem);
console.log("myCars1", myCars1);

//How to modify the Elements of an Array.
//To modify the Elements of an Array we have to Use Array Index.
//Replace Ferrari with Honda.

myCars1[3] = 'Honda';
console.log("myCars1", myCars1);

//In Array we can Store Duplicate Values as well.
let myFavPeople = ['Mark', 'John', 'Tim', 'Mohsin', 'Mohsin'];
console.log("myFavPeople", myFavPeople);

//To avoid the Duplicate we have to use Set.
let mySet = new Set(myFavPeople);
console.log('mySet', mySet);

//How to serach/Identify whether the element is present/ available inside an array or Not.
//1. indexof
//2. includes

console.log(myCars1.indexOf('Audi'));
console.log(myCars1.indexOf('Ferrari'));

console.log(myCars1.includes('Audi'));
console.log(myCars1.includes('Ferrai'));

// How to convert an Array into String.
//1. toString() --> elements separated by ',' 
//2. join() --> we can decide the separator to separate the Elements.

console.log(myCars1.toString());
console.log(myCars1.join(' '));

//splice : It is Used to add Elements in the Array and also used to Remove the Elements from the Array.
//         It will return the array of Deleted Elements.
//          It will modify the Original Array.
/* syntax : 
    splice(param1, param2, rest)
	
	where param1 : Position where new element will be added.
		  param2 : how many elements needs to be removed.
		  rest : new elements that we have to add.
*/

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

//Adding 2 Fruits
fruits.splice(2, 0, 'lemon', 'kiwi');
console.log('fruits', fruits);

//Removing 2 Fruits
let removedFruits = fruits.splice(0, 2 );
console.log('removedFruits', removedFruits);
console.log('fruits', fruits);

//Slice : Whenever we have to extract any portion from an Array then we use Slice method.
//      It will return the new Array and not modify the Original Array.
/* syntax: 
    slice(param1, param2)

    where param1 : Index of Starting Argument i.e fro where we have to Start Extraction.
          param2 : index of end Argument + 1.
*/

let slicedArray = fruits.slice(1, 3);
console.log('slicedArray', slicedArray);

//Extract Lemon and Kiwi.
let slicedLemonKiwi = fruits.slice(0, 2);
console.log('slicedLemonKiwi', slicedLemonKiwi);


//Iteration of the Array.

let bankingTransactions = [5000, -7000, 9000, -4000, 2000];
 console.log('bankingTransactions', bankingTransactions);

 //1. forEach
 /* syntax : 
			forEach( (currItem, index, originalArray) => {
				//Write the Statements.
			})   
 */

bankingTransactions.forEach((currItem, index, array) => {
    console.log('currItem', currItem);
    console.log('index', index);
    console.log('array', array);
})   

//Wecan Pass any no. of Parameters.
bankingTransactions.forEach((currItem, index) => {
    console.log('currItem', currItem);
    console.log('index', index);
    //console.log('array', array);
}) 

bankingTransactions.forEach((currItem) => {
    console.log('currItem', currItem);
    //console.log('index', index);
    //console.log('array', array);
}) 

bankingTransactions.forEach((currItem) => {
    currItem = currItem / 10;
    console.log('currItem', currItem);
})

//2. map() method.
bankingTransactions.map((currItem) => {
    console.log('currItem', currItem);

})

let updatedArray = bankingTransactions.map((currItem) => {
           return currItem / 10 ;
})
console.log('updatedArray', updatedArray);

//get all the Credited/Deposited Amounts from the Array.
//3. filter() method.

let depositsArray = bankingTransactions.filter((currItem) =>{
    return currItem > 0;
})
console.log('depositsArray', depositsArray);


let depositsArray1 = bankingTransactions.filter((currItem) => currItem > 0 );
console.log('depositsArray1', depositsArray1);

//get all the Withdrawl Amounts from Array.
let withdrawlArray = bankingTransactions.filter((currItem) => currItem <0 );
console.log('withdrawlArray', withdrawlArray);

let myFruits = ['Fig', 'Apple', 'Guava', 'Cherry'];
console.log('myFruits', myFruits);

//Get the Fruits for which the Fruit name is greater than 3 characters.
let filteredFruits = myFruits.filter((currItem) => currItem.length > 3 );
console.log('filteredFruits', filteredFruits);

//4. find() method.
//Check if bankingTransactions Array have 9000 entry or Not.
let entryFor9000 = bankingTransactions.find((currItem) => {
    return currItem === 9000;
})
console.log('entryFor9000', entryFor9000);


//Q. Is there any Method to Revers the Array Elements ?
//There is Direct method to do it. For ex;

let myFruits1 = ['Banana', 'Apple', 'Kiwi'];
console.log(myFruits1.reverse())


