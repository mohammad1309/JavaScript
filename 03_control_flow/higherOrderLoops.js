// for of

const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

// maps
// unique values

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Pak', "Pakistan")
map.set('In', "India")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':', value)
    
// }


// for in loop is used to loop objects

const myObj = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple"
 }
for (const key in myObj) {
    // console.log(key)
 
}

for (const key in myObj) {
    // console.log(myObj[key])
 
}

// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    }
]

// myCoding.forEach( (item) => {
//     console.log(item.languageFileName)
// } )

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums); 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);