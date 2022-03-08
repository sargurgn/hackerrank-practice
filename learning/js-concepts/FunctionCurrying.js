// We have a function multiply
let multiply = function(a, b) {
    return a * b;
}
// Currying using bind function
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiply(2, 5));
console.log(multiplyByTwo(5));
let multiplyByThree = multiply.bind(this, 3);
console.log(multiply(3, 5));
console.log(multiplyByThree(5));

// Currying using closures
multiply = function(a) {
    return function (b) {
        return a * b;
    }
}
multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5));
multiplyByThree = multiply(3);
console.log(multiplyByThree(5));
