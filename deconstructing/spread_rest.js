let mas1 = ["developer", "!"]
let mas2 = ["I", "can", "be", "a", ...mas1]
console.log(mas2)

var animals = function(animal1, animal2, ...other) {
    return [other, animal1, animal2]
}
console.log(animals('Cat', 'Dog', 'Frog', 'Elephant'))