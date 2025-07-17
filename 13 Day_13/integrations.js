console.log("JS Intgerations Using Fetch API");

function loadRandomUsers(){
    fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    //'GET' is the defult method in fetch So, it is Optional we can specify the method Name or we can avoid it as well.

}
loadRandomUsers();

function loadRandomUsers1(){
    fetch("https://reqres.in/api/users", {
        method : 'GET',
    }).then((response) => response.json()).then((data) => console.log(data))
    //'GET' is the defult method in fetch So, it is Optional we can specify the method Name or we can avoid it as well.

}
loadRandomUsers1();

//Yaha pe hab mai bina headers ke jaa raha tha tab status : 401 error de raha tha.
//jab maine uss error pe click kiya tab pata chala ki Api Key required hai and usi mein link diya hua tha 
// free api key nikal ne ke liye and api key nikalne ke baad api key daal ne ke liye 
//headers ka use karke api key supply kiya.

function loadRandomUsers2(){
    fetch("https://reqres.in/api/users", {
        method : 'GET',
        headers : {
            'x-api-key': 'reqres-free-v1',
        }
    }).then((response) => response.json()).then((data) => console.log(data))
    //'GET' is the defult method in fetch So, it is Optional we can specify the method Name or we can avoid it as well.

}
loadRandomUsers2();


//Earlier we are using Promise, now we can also use async await.
async function loadRandomUsers3(){
    let response = await fetch('https://reqres.in/api/users');
    let data = await response.json();
    console.log("data", data);
}
loadRandomUsers3();


//The Cat API
async function loadRandomCat(){
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    console.log("data", data);

    //Accessing the Array.
    const imageUrl = data[0].url;
    console.log("imageUrl", imageUrl);

    //Now we want to use this url in html file from Js File.
    let element = document.querySelector('.catimage');
    element.src = imageUrl;
}
loadRandomCat();

//Now API call with headers.
async function loadExchangeRate(){
    let response = await fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
        method:"GET",
        headers:{'X-CoinAPI-Key' : "8C3516AA-C19F-4255-BEA1-9278661A2914"},
    });
    let data = await response.json();
    console.log("data", data);
}
loadExchangeRate();




