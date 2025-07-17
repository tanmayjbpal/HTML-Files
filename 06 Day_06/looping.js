console.log('Looping in JS');

let myFavCars = ["Audi", "BMW", "Maruti", "Hyundai", "TATA"];

let myDetails = {
    fName : 'Ankit',
    lName : 'Jain',
    age : 75
}

//for loop  syntax--> for(initialization; condition; increment / decrement)
for(i=0; i < myFavCars.length ; i++){
    console.log(`${i+1}). ${myFavCars[i]}`);
}

//while loop syntax---> while(condition)

let currentIndex = 0;
console.log("Length/size of an array..: ", myFavCars.length);

while(currentIndex < myFavCars.length){
    console.log(`${currentIndex+1}. ${myFavCars[currentIndex]}`);
    //currentIndex = currentIndex + 1 ; or we can use
    currentIndex++ ;
}

//do while loop syntax --->
/*
    do{
        
    }while(condition)
*/

do{
    console.log("Do While Loop");
}while(1 === 2);

// for of loop syntax --->
/*
    for(let currentitem of myFavCars)
*/

for(let curritem of myFavCars){
    console.log("curritem", curritem);
    //Here we get all the values present inside Array One by One in curritem.
}    

//Here Above we are unable to access the Index, but Now we want to access the Index
//By Using the entries() method we can get the index and item.
for(let curritem of myFavCars.entries()){
    console.log("curritem", curritem);
    //Here curritem is in the form of Array i.e. Index and item.
    // So, we want Index and item Separately therefore we are using the Concept of Destructuring of Array. 
}  

for(let [index, car] of myFavCars.entries()){
    console.log(`${index+1}). ${car}`)
}

/*
for (let curritem of myDetails){
    console.log("curritem", curritem);
}
Here we can't Iterate the Object Directly. So, to Make the Object iterable 
we have 3 different Methods.
1) Object.keys , 2)Object.values , 3)Object.entries 
*/

for (let curritem of Object.keys(myDetails) ){
    console.log("curritem", curritem);
    console.log("Property Value : ", myDetails[curritem]);
     //We can access the Values Based on Key.
}

for (let curritem of Object.values(myDetails) ){
    console.log("curritem", curritem);
    //We can access the Values Based on Key, but we can't access the keys based on value.
}

for (let curritem of Object.entries(myDetails) ){
    console.log("curritem", curritem);
    //Here curritem is in the form of Array.
}

for (let [key, value] of Object.entries(myDetails) ){
    console.log(`${key} : ${value}`);
    
}

//for/in loop syntax-->
/*
    for(let variableName in collection)
*/

for(let curritem in myFavCars){
    console.log(curritem, myFavCars[curritem])
} 

for(let curritem in myDetails){
    console.log(curritem, myDetails[curritem])
    //Therefore, It is recommended to Use for/in loop to iterate Objects 
    // because we don't require to Use the 3 different Methods that we are using in for/of loops.
}

//Complex Senario : This type of Object we actually get from Apex / Webservice while working with LWC.

let openingHours = {
    fri : {open : '10AM', close : '11PM'},
    sat : {open : '09AM', close : '10PM'},
    sun : {open : '08AM', close : '09PM'},
}

for(let curritem in openingHours){
    console.log(curritem)
    console.log(openingHours[curritem])
    let {open, close} = openingHours[curritem];
    console.log(open, close);
    console.log(`On ${curritem} office Starts at ${open} and Closed at ${close}`);
}

for(let curritem of Object.entries(openingHours) ){
    console.log(curritem);
    // We are getting the o/p as array and inside the array we are getting the Object.
    // Where first entry is the value and second entry is the Object.
    //So Applying Destructuring.
}

for(let [day, hours] of Object.entries(openingHours) ){
    console.log(day, hours);
    //Now here for hours we get the Object. So, we can go and apply Destructuring.
}

for(let [day, {open, close}] of Object.entries(openingHours) ){
    console.log(day, open, close);
    console.log(`On ${day} office Starts at ${open} and Closed at ${close}`);
}

