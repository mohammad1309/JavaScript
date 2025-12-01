const myArr = [1,2,3,4,5,6];
myArr.push(7)
// console.log(myArr)

myArr.unshift(9) // adds in front
// console.log(myArr)
myArr.shift() // removes from front
// console.log(myArr);

// console.log(myArr.join()); // joins converts it the string datatype
// console.log(typeof myArr.join());

// slice, splice
// 1) ranges changes; slice excludes one and splice includes the given range
// 2) main difference: splice changes the actual array i.e. removes the elements in range, while slice doesn't

console.log(myArr.slice(1, 4))
console.log("A " ,myArr)

console.log(myArr.splice(1, 4))
console.log("B " ,myArr)
