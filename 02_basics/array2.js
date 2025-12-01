const arr1 = ["ayaan", "maham"]
const arr2 = ["irha", "alwaaz", "ali"]

const all = [...arr1, ...arr2] // spread  method
console.log(all);

// const arr3 = [1, 2, [4, 6], 6, 7, [2, 4, [4, 6]]]
// const simpleArr = arr3.flat(Infinity);
// console.log(simpleArr);

console.log(Array.isArray("maham"))
console.log(Array.from("maham"))
console.log(Array.from({name: "maham"})) // interesting as it returns nothing 

let s1 = 100
let s2 = 400
let s3 = 500
console.log(Array.of(s1, s2, s3));
