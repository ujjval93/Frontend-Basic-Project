const tinderUser = new Object(); //👉 this is Singleton Object

//const tinderUser = {};  👉 this is Object Literal ✅(you can say non singleton object)
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false;
console.log(tinderUser);
//Isse value array ke form me return hoti he jisase tum loop laga ke bhi chije kar skate ho-->>
console.log(Object.keys(tinderUser)); // key axis kerne ke liye
console.log(Object.values(tinderUser)); // key ki value ko axis karne ke liye
console.log(Object.entries(tinderUser)); //key & value dono axis karne ke liye
//Agar check krna ho ki object me koi element present he ki nhi, to kaise kare-->>
console.log(tinderUser.hasOwnProperty('isloggedin'));


//this is called nested object-->>
const regularUser=  {
    email: "ujjval@efji.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "yadav"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


//how to add two object-->>
const obj1= {1: "a", 2: "b", 3:"c"};
const obj2= {4: "d", 5: "e", 6:"f"};
//const obj3 = Object.assign({}, obj1, obj2);
// {} <-- ye bracket do ya na do fir bhi chalega, lekin de doge to kabhi error nhi aayega
// but we use this, raw and simple-->>
const obj3 = {...obj1, ...obj2};
console.log(obj3);

//Agar hame koi arr object ka data axis karna ho to-->>
//const Users = [{mardeb: "2"}, {email:"3"}, {bc: "4"}]
//Users[1].email;




// Destructuring in JS-->>
const result = {
    nickName: "mayank",
    grade: 100,
    peopleCalledHis: "HackerBoy"
}
const {peopleCalledHis: call} = result;  //<<--this is called destructuring 
//console.log(result.peoplecalledHim)
console.log(call)



//jaruri nhi API only JSON ke format me ho wo array ke form me bhi ho sakata he
//ex-> {"id": "1213", "name": "mayank", "result": 90}
//ex1-->> [{"id": "1213"}, {"name": "mayank"}, {"result": 90}]