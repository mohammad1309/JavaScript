let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString());

console.log(myDate.getDay())
console.log(myDate.getMonth())

myDate.toLocaleString('default', {
     day: "2-digit",
     month: "numeric"
})

console.log(myDate.getDay())
console.log(myDate.getMonth())
console.log(myDate.getMonth().toString())