let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoggedIn = true
console.log(typeof isLoggedIn)
let valueIsLoggedIn = Number(isLoggedIn)
console.log(valueIsLoggedIn)

let boolIsLoggedIn = Boolean(valueIsLoggedIn)
console.log(boolIsLoggedIn)

// we can even use 'String' to convert any variable to string
// 1 -> true , 0 -> false
// "" -> false  ,  "Ayaan" -> true