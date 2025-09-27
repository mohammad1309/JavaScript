// primitive datatypes
/* 7 types :
number, string, bigInt, null, undefined, symbol, boolean 
*/

let id = Symbol('123')
let id2 = Symbol('123')

console.log(id == id2)

// non-primitive datatypes
// array, objects, functions

let names = ["ayaan", "maham", "alwaaz"]

let myObj = {
    name: "ayaan",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(names)
console.log(myObj)
console.log(myFunction) // ???? will learn about this