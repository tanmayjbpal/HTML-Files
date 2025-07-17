console.log('Collections in JS');
//Declare the Map
let myMap = new Map();
console.log("myMap", myMap);
//Add Entries in Map.
myMap.set("1", "Ankit");
myMap.set(2, 50);
myMap.set(true, 'trainer');
console.log("myMap", myMap);

//Access values from Map.
console.log(myMap.get("1") );
console.log(myMap.get(true) );
console.log(myMap.size);

//Declare the Map Directly with the values.
let favPlaces = new Map([
    ["Jaipur", "Palace"],
    ["Pune", "Fort"],
    ["Goa", "Beach"],
]);

console.log("favPlaces", favPlaces);
//We can iterate the Map with for/of loop as well.
for(let curritem of favPlaces){
    console.log(curritem);
    //Here curritem is in the form of Array. So, Applying Destructuring.
}


for(let [key, value] of favPlaces){
    console.log(key, value);
}

//Only want to Access the keys.
for(let curritem of favPlaces.keys() ){
    console.log(curritem);
}

//Only want to Access the Values.
for(let curritem of favPlaces.values() ){
    console.log(curritem);
}


//Declare Set Collection.
let mySet = new Set();
console.log("mySet", mySet);

//Add Values.
mySet.add('Burger');
mySet.add('Pizza');
mySet.add('Sandwich');
mySet.add('Ghar Ka Khana');
mySet.add('Pizza');
console.log("mySet", mySet);

//Check if Sandwich is Present or Not ?
console.log(mySet.has("Sandwich"));
console.log(mySet.has("Chinese Food"));

//Delete Values.
mySet.delete("Sandwich");
console.log("mySet", mySet);

//Declaring Set Directly with values.
let myFavCities = new Set(["Pune", "Hyderabad", "Bengaluru"]);
console.log("myFavCities", myFavCities);

for(let curritem of myFavCities){
    console.log(curritem);
}
