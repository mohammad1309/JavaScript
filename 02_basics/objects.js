// Singleton
// literals say singleton nahin banega, constructor say hamesha singleton banega

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Ayaan",
    "sur name": "Sheikh",
    [mySym]: "myKey",
    age: 18,
    email: "ayaansheikh.r2b@gmail.com",
    isLoggedIn: false
}



// // method 1: using . dot

// console.log(JsUser.email)

// // method 2: using [] brackets

// console.log(JsUser["email"])
// console.log(JsUser["sur name"]) // these types of key value pairs can only be accessed using [] brackets

// console.log(typeof JsUser[mySym])

JsUser["email"] = "ayaansheikh.siuuu@gmail.com"
JsUser["email"] = "ayaansheikh.r2b@gmail.com"

// console.log(JsUser)

// functions

JsUser.greeting = function(){
    console.log("Hello");
}

JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(JsUser.greetingTwo())




