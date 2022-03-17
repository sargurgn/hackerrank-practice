// Leetcode 9. Palindrome Number
const reverse = function(x) {
    let temp = x;
    let reversedNum = 0;
    while (temp >= 1) {
        let digit = Math.floor(temp % 10);
        reversedNum = Math.floor(reversedNum * 10 + digit);
        temp = Math.floor(temp / 10);
    }
    return reversedNum
};

const isPalindrome = function(x) {
    if (x < 0) return false;
    return x === reverse(x);
}
console.log(`121 is a ${isPalindrome(121)}`)
console.log(`-121 is a ${isPalindrome(-121)}`)
console.log(`10 is a ${isPalindrome(10)}`)
console.log(`1000000001 is a ${isPalindrome(1000000001)}`)