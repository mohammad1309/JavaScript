// singleton or by constructors

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "ayaan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "ayaan@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Ayaan",
            lastName : "Sheikh"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

const course = {
    courseName : "abcd",
    price : "999",
    courseInstructorName : "Ayaan"
}
 
// Destructuring 
const {courseInstructorName : Iname} = course
console.log(Iname)