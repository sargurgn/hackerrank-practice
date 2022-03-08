const addDigits = function(num) {
    if (num === 0) return 0;
    const lastIndex = parseInt(Math.log10(num));
    if (lastIndex === 0) {
        return num;
    }
    let sum = 0;
    let reminder = num;
    for (let i = lastIndex; i >= 0; i--) {
        sum += parseInt(reminder / 10**i);
        reminder = reminder % 10**i;
    }
    return addDigits(sum);
}

console.log(addDigits(38)); // 2
console.log(addDigits(505)); // 1
console.log(addDigits(0)); // 0
