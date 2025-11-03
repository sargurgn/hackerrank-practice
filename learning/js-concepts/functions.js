// Functions in Javascript

// 1. What is function declaration

function square (a) {
    return a * a
}

// 2. What is a function expression

const squareFn = function (a) {
    return a * a;
}

// 3. What is first class function

function displaySqr(cb) {
    console.log("Sq is " + cb(5))
}
displaySqr(square);

// 4. What is IIFE

(function showSqr(a) {
    return (function (b) {
        console.log( b * a)
    })(10)
})(5)


// 5. Function hoisting

var x = 7;

var newFn = function () {
    console.log(x);
    var x = 10;
    console.log(x);
}

newFn();