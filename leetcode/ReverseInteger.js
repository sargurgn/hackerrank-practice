// Leetcode 7. Reverse Integer
var reverse = function(x) {
    let temp = Math.abs(x);
    let reversedNum = 0;
    while (temp >= 1) {
        let digit = Math.floor(temp % 10);
        reversedNum = Math.floor(reversedNum * 10 + digit);
        temp = Math.floor(temp / 10);
    }
    if (reversedNum === 0 || reversedNum > (Math.pow(2, 31) - 1) || reversedNum < -(Math.pow(2, 31) - 1)) {
        return 0;
    }
    return isNegative ? reversedNum * -1 : reversedNum;
}

console.log('Reverse is ', reverse2(-123));
console.log('Reverse is ', reverse2(1534236469));
console.log('Reverse is ', reverse2(1000000001));
