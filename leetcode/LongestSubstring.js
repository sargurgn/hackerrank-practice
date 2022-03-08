const bruteForceApproach = function(s) {
    const subStrLen = [];
    for (let i = 0; i < s.length; i++) {
        let word = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (word.indexOf(s[j]) >= 0) {
                break;
            }
            word += s[j];
        }
        subStrLen.push(word.length);
    }
    return Math.max(...subStrLen);
}

const divideAndConquerApproach = function(s) {

}

const lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    return bruteForceApproach(s);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
