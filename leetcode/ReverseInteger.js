const reverse = function(x) {
    let lastIndex = parseInt(Math.log10(Math.abs(x)));
    const isNegative = x < 0 ? true : false;
    let finalInt = 0;
    let reminder = Math.abs(x);
    for (let i = lastIndex; i >= 0; i--) {
        const digit = parseInt(reminder/10**i) * (10**(lastIndex-i));
        finalInt += digit;
        reminder = reminder%10**i;
    }
    if (finalInt === 0 || finalInt > (Math.pow(2, 31) - 1) || finalInt < -(Math.pow(2, 31) - 1)) {
        return 0;
    }
    return isNegative ? finalInt * -1 : finalInt;
};

console.log('Reverse is ', reverse(1534236469));
console.log(2147483648 - 1534236469);
