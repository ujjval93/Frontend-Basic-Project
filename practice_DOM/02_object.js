const jsUser = {
    name: "mayank",
    age: 20,
    karam: "futa_hua"
}
const kala = {
    hello: "jaymata",
    age: 20,
    id: "hey man"
}
// console.log(kala.hello);
// console.log(jsUser.name);
// console.log(jsUser["age"]);

jsUser.mainHoon = function(){
    console.log("hello, you don't take tension i will be there");
}

jsUser.mainHoonNa = function(){
    console.log(`kya re fir aa gaya muh utha ke ${jsUser.name}`)
}

console.log(jsUser.mainHoon());
console.log(jsUser.mainHoonNa());

// jsUser object me ek naya property add ho raha hai (new property is adding in object)
// 👉 Jiska naam hai "mainHoon"
// 👉 Aur uski value hai ek function

// Object me function ko method bolte hain.
//why is printing undefined in console-> Function call hua → message print hua

// Function kuch return nahi kar raha
// Default return = undefined
// Isliye console.log() undefined print kar raha