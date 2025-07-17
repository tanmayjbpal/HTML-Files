console.log('String and String Methods in JS.');

//Defining/declaring a Variable of type String.
let myDetails = 'My Name is Ankit';
console.log('myDetails', myDetails);

//Calculate the Length of String.
console.log('myDetails Length', myDetails.length);

//Extracting the String / Breaking the string into multiple parts.
let text = 'Apple, Banana, Kiwi';
console.log(text);

//To Perform the Extraction from String in JS we have 3 different methods.
//slice(start position, end position) (end is not included)
//Now we want to Extract Banana from the String.
//Using Slice Method. So, being a String it is nothing but an Array of Characters so always Start from 0 Position.
let sliceBanana = text.slice(7, 12);
console.log('sliceBanana', sliceBanana);
//So, here if we take the End Position as 12 then in Word Banana the Last Character is Missing.
//Therefore it is Specifed in slice method that end is not Included and thats the Reason we have to add +1 in End Position.
//i.e. slice(start position, end position + 1 ) (end is not included)

let sliceBanana1 = text.slice(7, 13);
console.log('sliceBanana1', sliceBanana1);

// Now if we didn't specify the end position.
let sliceRemainingFruits = text.slice(7);
console.log('sliceRemainingFruits', sliceRemainingFruits);
//Another Advantage of slice method.
//slice with negative start position.
let part = text.slice(-1);
console.log('part', part);

let part1 = text.slice(-12);
console.log('part1', part1);

//substring(start position, end position + 1)
//In the substring if we pass the negative values in position it will treated as zero(0).

let substringBanana = text.substring(7, 13);
console.log('substringBanana', substringBanana);

let partSubstring = text.substring(-1);
//In Substring it will treated as zero(0)
// i.e. let partSubstring = text.substring(0); Here JS is Converting negative value into 0.
//And we know that if don't specify the end Position it will Cover the Complete String.
console.log('partSubstring', partSubstring);


//substr(start position, Length(i.e.till what length we need to extract) )
let substrBanana = text.substr(7, 6);
console.log('substrBanana', substrBanana);

//Replace Banana with some other fruit.
//By using replace method
//Replace method will only Replace the 1st Match. And it is Case Sensitive.
//And If we want to make it case insensitive there is a Regular Expression for that.
//Replace will not Modify existing String but it will Create a new String for Us.
let newFruitsText = text.replace('Banana', 'Mango');
console.log('newFruitsText', newFruitsText);

//Replace will not Modify existing String but it will Create a new String for Us.
console.log('text', text); // No impact/change on the Existing String.

//Replace method will only Replace the 1st Match.
let text1 = 'Apple, Banana, Banana, Kiwi';
let newFruitsText1 = text1.replace('Banana', 'Mango');
console.log('newFruitsText1', newFruitsText1);

//If we want to Replace all the strings then we have to use replaceall method
//but again with the replaceall we have to go and use the Regular Expression.

// Converting the Entire String into UpperCase.
//By Using toUppercase method.
console.log('myDetails', myDetails);
console.log('myDetails To Uppercase', myDetails.toUpperCase());

// Converting the Entire String into LowerCase.
console.log('myDetails To Lowercase', myDetails.toLowerCase());

//Concatenation Operation of two Strings.
let text2 = 'Hello';
let text3 = 'JS';
let text4 = text2.concat('World');

//String Interpolation (Easy way). And Recommended.
let concatenationString = `${text2} ${text3}`;
console.log('concatenationString', concatenationString);

//We can also use Concat Method but There will be no Space.
console.log('text4', text4);

//So, to add Space.
let text5 = text2.concat(' World');
console.log('text5', text5);
//OR we can also use.
let text6 = text2.concat(' ', 'World');
console.log('text6', text6);
//But Recommended is String Interpolation. Instead of using "+"/"concat" method.

//trim(), trimStart(), trimEnd()
let trimMe = "      Hello World         ";
console.log("trimMe", trimMe.trim());
console.log("trimMe", trimMe.trimStart());
console.log("trimMe", trimMe.trimEnd());

//padStart(), padEnd()
let myNumber = "5";
// Now I want to Modify the String like this "****5"
console.log("myNumber", myNumber.padStart(5, "*"));
console.log("myNumber", myNumber.padEnd(5, "*"));
console.log("myNumber", myNumber.padStart(5, "0"));
console.log("myNumber", myNumber.padEnd(2, "$"));

//split() method is used to split the String. And Convert the String into Array.
let mycsvDetails = "Ankit,Amit,Nidhi,Kiyaan,Laksh";
let mycsvDetailsArray = mycsvDetails.split(',');
console.log('mycsvDetailsArray', mycsvDetailsArray);

let mycsvDetails1 = "Ankit,Amit,Nidhi*Kiyaan,Laksh";
let mycsvDetailsArray1 = mycsvDetails1.split('*');
console.log('mycsvDetailsArray1', mycsvDetailsArray1);


let mycsvDetails2 = "Ankit Amit Nidhi Kiyaan Laksh";
let mycsvDetailsArray2 = mycsvDetails2.split(' ');
console.log('mycsvDetailsArray2', mycsvDetailsArray2);

//Convert Array into String we have 2 different methods.
//1. toString()
//2. join()
let myToString = mycsvDetailsArray2.toString();
console.log('myToString', myToString);

let joinString = mycsvDetailsArray2.join('*');
console.log('joinString', joinString);

let joinString1 = mycsvDetailsArray2.join(' ');
console.log('joinString1', joinString1);

//search the String
//1. indexof : It will return the index position of a String. 
// And If string doesn't exist then it returns -1.
console.log('text', text);
console.log('indexof Banana', text.indexOf('Banana'));// Here we get starting Position.
console.log('indexof Mango', text.indexOf('Mango'));

let sliceBanana2 = text.slice(text.indexOf('Banana') , text.indexOf('Banana') + 6);
console.log('sliceBanana2', sliceBanana2);
//Instead of Hardcoding we can use indexof method.


//2. includes : It will check whether the String is present or not. 
// If present it returns true or else it returns false.
console.log('indexof Banana', text.includes('Banana'));
console.log('indexof Mango', text.includes('Mango'));

//startsWith()
console.log(text.startsWith('Apple'));
console.log(text.startsWith('Banana'));

//endsWith();
console.log(text.endsWith('Kiwi'));
console.log(text.endsWith('Banana'));


//Remove Duplicate from the String.
let myString = "Hello World World";
let myStringArray = myString.split(' ');
console.log('myStringArray', myStringArray);
let finalArray =[];
myStringArray.map( curritem => {
    if(! finalArray.includes(curritem)){
        finalArray = [...finalArray, curritem];
    }
});

console.log('finalArray', finalArray);
console.log(finalArray.join(' '));

//But the best way is :
//break the string into Array ---> using split() method.
//convert array into set ---> conversion
//combine the set --> using join() method.


