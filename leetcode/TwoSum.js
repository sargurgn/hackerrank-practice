var twoSumUsingMap = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }
};

var twoSumUsingObject = function(nums, target) {
    
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if ((target - nums[i]) in obj) {
            return [obj[target - nums[i]], i]
        }
        obj[nums[i]] = i;
    }
    
};

// console.time('twoSumUsingObject');
// console.log(twoSumUsingObject([2,11,7,15], 9));
// console.timeEnd('twoSumUsingObject');

console.time('twoSumUsingMap');
console.log(twoSumUsingMap([2,11,7,15], 9));
console.timeEnd('twoSumUsingMap');