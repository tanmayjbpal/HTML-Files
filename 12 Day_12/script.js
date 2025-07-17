console.log('Asynchronous JS');

//1.Promise

//Creating Promise
function generatePromise(message){
    
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(message);
            resolve();
        }, 1000);
    });
}

//Handling only the Resolve/fullfill part of Promise.

//Calling the Promise.
generatePromise('1st Call').then(() => {
    console.log('1st Promise Resolved Successfully.');
    
    //Now if we want to print another message as soon as our first call is done.
    generatePromise('2nd Call').then(() => {
        console.log('2nd Promise Resolved Successfully.');
    });

});


// Now Handling the rejection in Promise.

function generatePromise1(message){
    
    return new Promise((resolve, reject) => {

        if(!message){
            reject('Message is Empty');
        }else{
            setTimeout(() =>{
                console.log(message);
                resolve();
            }, 1000);
        }
    });
}

generatePromise1().then(() => {

    //.then block is used if our Promise gets fullfilled.
    console.log('Promise Resolved Successfully.')
}).catch((error) => {
    //.catch block is used if our Promise gets rejected.
    console.log('Promise Rejected', error);
    
})

//Now handling both resolve and reject in promise
function generatePromise2(message){
    
    return new Promise((resolve, reject) => {

        if(!message){
            reject('Message is Empty');
        }else{
            setTimeout(() =>{
                console.log(message);
                resolve();
            }, 1000);
        }
    });
}

generatePromise2('1st Call').then(() => {
    console.log('1st Promise Resolved Successfully.');
    
    //Now if we want to print another message as soon as our first call is done.
    generatePromise2('2nd Call').then(() => {
        console.log('2nd Promise Resolved Successfully.');
    });

    generatePromise2().catch((error) => {
        console.log("Promise rejected", error)
    })
});


//2. Async/Await

async function generateDifferentPromises() {
    await generatePromise2("1st Call");
    await generatePromise2("2nd Call");

}

// If we want Error handling in Async/await then we can use try catch block.
async function generateDifferentPromises1() {
    try{
        await generatePromise2("1st Call");
        await generatePromise2("2nd Call");
    }catch(error){
        console.log(error);
    }
    

}

//Calling/Executing the async function.
generateDifferentPromises();
generateDifferentPromises1();

//Methods in Promise.
//1. Promise.all()

function resolveTimeout(value, delay){
    return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

function rejectTimeout(reason,delay){
    return new Promise((resolve, reject) => setTimeout(() => reject(reason), delay));
}

async function load(){
    let promise1 = resolveTimeout('Welcome to Tech Journey with Ankit', 5000);
    let promise2 = resolveTimeout('Welcome to Day 12 of Bootcamp', 5000);
        
    // Now we want that our next processing should be done only when both the promises are completed.
    //For that we Use promise.all().
    const allPromise = Promise.all([promise1, promise2]);

    try{
        const lists = await allPromise;
        console.log("lists", lists); // It will return the result in the form of Array.
    }catch (error){
        console.log(error);
    }

}

load();

//Sequence of Promise output is changed Depending upon the order of Sequence in Promise.all(). 
async function load1(){
    let promise1 = resolveTimeout('Welcome to Tech Journey with Ankit', 5000);
    let promise2 = resolveTimeout('Welcome to Day 12 of Bootcamp', 5000);
        
    // Now we want that our next processing should be done only when both the promises are completed.
    //For that we Use promise.all().
    const allPromise = Promise.all([promise2, promise1]);
    //Sequence of Promise output is changed Depending upon the order of Sequence in Promise.all(). 

    try{
        const lists = await allPromise;
        console.log("lists", lists); // It will return the result in the form of Array.
    }catch (error){
        console.log(error);
    }

}

load1();

//What happens if any of the Promise gets rejected.
async function load3(){
    let promise1 = resolveTimeout('Welcome to Tech Journey with Ankit', 5000);
    let promise2 = resolveTimeout('Welcome to Day 12 of Bootcamp', 5000);
    let promise3 = rejectTimeout('Loading Failed', 7000);
    
    // Now we want that our next processing should be done only when both the promises are completed.
    //For that we Use promise.all().
    const allPromise = Promise.all([promise1, promise2, promise3]);

    try{
        const lists = await allPromise;
        console.log("lists", lists); // It will return the result in the form of Array.
    }catch (error){
        console.log(error);
    }

}

load3();

//2.Promise.any()
async function load4(){
    let promise1 = resolveTimeout('Welcome to Tech Journey with Ankit', 5000);
    let promise2 = resolveTimeout('Welcome to Day 12 of Bootcamp', 5000);
    let promise3 = rejectTimeout('Loading Failed', 7000);
    
    
    const anyPromise = Promise.any([promise1, promise2, promise3]);

    try{
        const lists = await anyPromise;
        console.log("lists", lists); // It will return the first fullfilled Promise.
    }catch (error){
        console.log(error);
    }

}
load4();

//3.Promise.race()
async function load5(){
    let promise1 = resolveTimeout('Welcome to Tech Journey with Ankit', 5000);
    let promise2 = resolveTimeout('Welcome to Day 12 of Bootcamp', 3000);
    let promise3 = rejectTimeout('Loading Failed', 7000);
    
    
    const racePromise = Promise.race([promise1, promise2, promise3]);

    try{
        const lists = await racePromise;
        console.log("lists", lists); // It will return the first fullfilled/rejected Promise whichever wins the race.
    }catch (error){
        console.log(error);
    }

}
load5();






