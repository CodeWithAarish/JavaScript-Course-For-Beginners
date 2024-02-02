// Chapter 3 Practice Set
// Question 1
let obj = {
    "aarish": 98,
    "harry": 70,
    "aakash": 7
}

/*
for(let i=0; i<Object.keys(obj).length; i++){
    console.log(`The marks of ${Object.keys(obj)[i]} are ${obj[Object.keys(obj)[i]]}`)
}
*/

// Question 2
/*
for(let i in obj){
    console.log(i)
    console.log(`The marks of ${i} is ${obj[i]}`)
}
*/

// Question 3
/*
let cn = 4;
let i;
while (i!=cn) {
    i = prompt("Enter a number")
}
console.log("You entered the correct number")
*/

// Question 4
const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}
console.log(mean(1,2,3,4,5))