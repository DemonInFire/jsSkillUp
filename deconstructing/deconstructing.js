let information = {
    name:"Vasiliy",
    age:"20",
    gender:"male"
}
let {name, age} = information
console.log(name)
console.log(age)

let fruits = ["apple", "pinapple", "strawberry"]
let [fruit1,, fruit3] = fruits
console.log(fruit1)
console.log(fruit3)

const multiply = ([firstValue,, thirdValue]) => {
    return firstValue * thirdValue
}
console.log(multiply([2, 3, 7, 8]))