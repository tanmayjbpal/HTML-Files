console.log("JS Custom Events");

//Step3. Listening to the event /Handling of that event.
document.addEventListener('valueten', (event) => {
    console.log('Access the Event Data', event.detail.message);
})
function changeHandler(event){
    console.log(event.target.value);

    let value = event.target.value;
    
//Whenever the User enters the value as 10, then I want to fire the Custom event.

    if(value == 10){
        //Step1. Creation of Custom Event.
        const myEvent = new CustomEvent("valueten", {
            detail: {
                message : 'User have Entered the Value 10',
            }
        });

        //Step2. Dispatching of the event.
        document.dispatchEvent(myEvent);

        //Now for Step3. we have to handle the event so look line no. 3
    }

}
