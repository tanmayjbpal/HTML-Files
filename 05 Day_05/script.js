console.log("JS Objects");

//Declare the Object.
//Standard or Best Practice in JS to Define the Object using Const keyword. But if we want then we can define it Using let keyword as well.

let myDetails = {
    'fName' : 'Ankit',
    lName : 'Jain',
    age : 75,
    skills : ['Admin', 'Apex', 'LWC', 'JS'],
};

//Inside Object Sequence/Order of Elements Doesn't Matter. But in Array Sequence/Order of Elements Matter.
console.log('myDetails', myDetails);
console.log('typeof myDetails', typeof myDetails);


// JSON.stringify() : Object into String
let jsonString = JSON.stringify(myDetails);
console.log('jsonString', jsonString);
console.log('typeof jsonString', typeof jsonString);

// JSON.parse() : String into Object 
let jsonObject = JSON.parse(jsonString);
console.log('jsonObject', jsonObject);
console.log('typeof jsonObject', typeof jsonObject);

// Modify the Object 1) "." 2) []
myDetails.doy = '1950';
//JS will check that after "." whether doy property / element is present inside the Object or Not, if Not then Add new Element / Property inside the Object.
console.log('myDetails', myDetails);

//If the Property / element is available inside the Object then it will Update that Property.
myDetails.age = 2023 - 1950;
console.log('myDetails', myDetails);

//In the above Senario we are Harcoding the Properties and Passing the Values, But now we want to pass them Dynamically we Use [].
myCountry = 'Country';
myDetails[myCountry] = 'India';
console.log('myDetails', myDetails);

myDetails[myCountry] = 'USA';
console.log('myDetails', myDetails);

//Limitation of "." operator is we cannot Populate the Property/Element Name with Space using dot operator. So, for that we can Use [] square braces notation.
//myDetails.City Name = 'Pune'; // Error.
myDetails['City Name'] = 'Pune';
console.log('myDetails', myDetails);

// Access the Values from Object. 1) "." 2) []

let mycountry = myDetails.Country;
console.log('myCountry', mycountry);

let myCity = myDetails['City Name'];
console.log('myCity', myCity);
