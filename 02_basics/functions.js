function myName(){
    console.log("A")
    console.log("y")
    console.log("a")
    console.log("a")
    console.log("n")
}

// myName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

// addTwoNumbers(4,6)

// function addNumbers(number1, number2){
//     return number1 + number2
// }

// console.log("Result = ", addNumbers(3,4))

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,430,500))

// object

const userDetails = {
    userName: "Ayaan",
    age: "21"   
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.userName} and their age is ${anyObj.age}`)
}

handleObj(userDetails)

// arrays

const arr = [200, 400, 500, 600]

function returnSecValue(getArray){
    console.log(getArray[3])
}

returnSecValue(arr)