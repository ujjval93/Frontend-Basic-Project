const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //db calls, cryptography, Network
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//Method --> 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("promise task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolve");
})


//Method-->3

const promiseThird = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "ujjval", gmail: "ujjval@ex.com"});
    }, 1000)
})

promiseThird.then(function(user){
    console.log(user)
})

//Method-->4

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true;
        if(!err){
            resolve({username: "Ujjval Yadav", gamil: "Ujjval@gmail.com"});
        }else{
            reject("ERROR: Something Went Wrong")
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=> console.log("the promise is either resolved or rejected"))

//method--> 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true;
        if(!err){
            resolve({username: "Ujjval Yadav", gamil: "Ujjval@gmail.com"});
        }else{
            reject("ERROR: JS Went Wrong")
        }
    }, 1000)
})


async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response)
    }catch(err){
        console.log(err)
    }
}
consumePromiseFive()

// why we use await --> because, promise complete hone ka wait karo, phir next line run karo.
// besically waitting for response of any data

async function getAllUser() {
    try {
        // here why do we use await --> kyuki data read karne aur lane me time lagata he thas why we use await
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        //why use await--> We use await because converting the response to JSON takes some time. 
        // If we do not use await, the data may not be printed correctly.
        const data = await response.json()
        console.log(data);
    } catch (err) {
        console.log("E: ", err);
    }
}

//getAllUser()


//by using then and catch method
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))





// We use await to wait for a Promise to resolve before moving to the next line of code. 
// This ensures that asynchronous operations like fetching data or converting it to JSON
//  complete before using the result.