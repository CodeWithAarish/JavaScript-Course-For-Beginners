// Chapter 1 Practice Set

// Question 1
let a = "Aarish";
let b = 1;
let c = a+b
console.log(c)

// Question 2
console.log(typeof(c))

// question 3
const d = {
    name: "Aarish",
    class: 9,
    section: "A",
    rollNo: 19
}
// d = 213 // This will throw an error because a const can not be change once declared.

// Question 4
d["isPrincipal"] = false

// Question 5
const dict = {
    nepotism: "the practice among those with power or influence of favouring relatives, friends, or associates, especially by giving them jobs.",
    hypocrisy: "the practice of claiming to have higher standards or more noble beliefs than is the case.",
    yakka: "work, especially of a strenuous physical kind.",
    utensil: "a tool, container, or other article, especially for household use."
}

console.log(dict.nepotism)
console.log(dict["nepotism"])
console.log(dict.hypocrisy)
console.log(dict.yakka)
console.log(dict.utensil)