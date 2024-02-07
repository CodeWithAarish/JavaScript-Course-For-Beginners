// Chapter 4 Practice Set
// Question 1
// console.log("har\"".length)

// Question 2
// const a = [1,2,3,4, "Aarish"]
// console.log(a.includes(1))

// Question 3
// let str = "Aarish"
// console.log(str.toLocaleLowerCase())

// Question 4
let str2 = "Please give Rs 1000"
// let amount = str2.slice("Please give Rs ".length)
let amount = str2.slice(15)
console.log(amount)

// Question 5
let str3 = "Aarish"
str3[3] = 1
console.log(str3) // It will not change, because string is immutable