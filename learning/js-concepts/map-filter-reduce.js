//map, filter, reduce

// map function is used to transform an array into new array
// callback function recevies currentItem, Index and Array
const nums = [1,2,3,5]
const multiplyByThree = nums.map((num, index, arr) => {
  return num * 3
})
console.log(multiplyByThree)

// filter
// create a filtered array from source array based on a condition

const moreThanTwo = nums.filter((num) => {
  return num > 2
})
console.log(moreThanTwo)

// reduce
// Used to compute aggregation
const sum = nums.reduce((acc, curVal, index, arr) => {
  return acc + curVal;
})
console.log(sum)

// Polyfills
// map

Array.prototype.customMap = function (cbfn) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cbfn(this[i], i, this))
  }
  return temp;
}
let customMultiplyByThree = nums.customMap((num, index, arr) => {
  return num * 3
})
console.log(customMultiplyByThree)

// filter
Array.prototype.customFilter = function(cbfn) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    if (cbfn(this[i], i, this)) {
      temp.push(this[i])
    }
  }
  return temp
}
let customMoreThanTwo = nums.customFilter((num) => {
  return num > 2
})
console.log(customMoreThanTwo)

// reduce
Array.prototype.customReduce = function(cbfn, initVal) {
  var acc = initVal
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cbfn (acc, this[i], i, this) : this[i]
  }
  return acc
}

let customSum = nums.customReduce((acc, curVal, i, arr) => {
  return acc + curVal
})
console.log(customSum)
