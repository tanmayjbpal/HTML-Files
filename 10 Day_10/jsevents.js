console.log('JS Events.')

function clickme(){
    alert("Welcome Me");
}

function mouseoverhandler(){
    console.log("Mouse Over Event Executed");

    let element = document.querySelector(".hoverme");
    element.style.display = "none";

}

function mouseouthandler(){
    let element = document.querySelector(".hoverme");
    element.style.display = "";
}

function changeHandler(event){
    console.log("The Number is..: ", event.target.value);

    //If we want to access name attribute.
    console.log(event.target.name);
}


let element = document.querySelectorAll('div');
console.log("element", element); // Here the Output is NodeList.

//Now converting it into Array.
let element1 = Array.from( document.querySelectorAll('div') );
console.log("element1", element1);







