function closureExample() {
    for (var index = 1; index <= 5; index++) {
        function closure(i) {
            setTimeout(function () {
                console.log(i)
            }, i * 1000)
        }
        closure(index)
    }
}
closureExample()

// Infinite recursion 
const sum = a => b => b ? sum(a + b) : a;
console.log('Sum using infinite recursion ', sum(1)(2)(3)(4)())
