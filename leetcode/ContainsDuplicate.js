// Leetcode 217. Contains Duplicate
const containsDuplicate = function(nums) {
    let map = new Map();
    nums.map((e, i) => {
        let count = map.has(e) ? (map.get(e) + 1) : 1
        map.set(e, count);
    });
    for (let val of map.values()) {
        if (val > 1) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
