console.log("hello")


for(let i =0; i< 10; i++){
    //console.log(i)
}

const arr = [1, 2, 3,4 ,5 ,6 ,67 ,77,78,8 ]
console.log(arr[6])

// const magic = {1: 2, 2: 3, 3: 4, 4: 5}
// for(const key in magic){
//     console.log(`${key} :- ${magic[key]}`)
// }
// for(const key in magic){
//     console.log(magic[key])
// }

// const mynum = [1, 2,3 ,5 ,6, 7,8 ,9]

// const newNum = mynum.filter((num) => num > 4)
// console.log(newNum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);