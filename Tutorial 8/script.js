// Chapter 2 Practice Set

// Problem 1
/*
let age = Number.parseInt(prompt("Enter your age: "));
if (age == 10) {
    alert("Your age is 10 years");
}
else if (age > 10 && age < 20) {
    alert("Your age lies between 10 to 20");
}
else if (age == 20) {
    alert("Your age is 20 years");
}
else{
    alert("You are less than 10 or greater than 20")
}
*/

// Problem 2
/*
const fru = prompt("Enter The fruit you are searching for :- ");
switch (fru) {
    case "Banana":
        console.log("Do you want banana ? 🍌");
        break;
    case "Pineapple":
        console.log("Do you love Pineapple 💖");
        break;
    case "Mango":
        console.log("Do you know when a man goes it is call Mangoes 😂");
        break;
    default:
        console.log(`We Don't have ${fru}`)
        break;
}
*/

// Problem No 3
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/

// Problem No 5
let age = 19
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)