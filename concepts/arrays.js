// flat - Flattening multi-dimension array to flat array
const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function arrayFlatExample() {
    const flatArray = arrays.flat(1); // Flattens array to depth 1
    console.log("Flattened array is ", flatArray);
}

// Copy within - copies values from specified index from source to specified index
function copyWithinExample() {    
    arrays.flat(1).copyWithin(0, 2); //
    console.log("Shifted array is ", arrays);
}

// Map and flatMap
function mapAndFlatMapExample() {
    const nums = [1, 2, 3];
    const numStrs = ["one", "two", "three"];
    
    let mapped = nums.map((v, i) => [v, numStrs[i]]);
    console.log("Map output ", mapped);
    mapped = nums.flatMap((v, i) => [v, numStrs[i]]);
    console.log("Flat map output ", mapped);
}

// Reduce and Reduce right
const total = flatArray.reduce((a, v) => a + v);
console.log("Sum is ", total);

const text = ["t", "s", "e", "b"];
const best = text.reduceRight((a, v) => a + v);
console.log(best);

// Array.from() - Creating an array from any kind of existing source
console.log(
  "Convert String Narasimhan to Char Array => ",
  Array.from("Narasimhan")
);
console.log(
  "Create array of length 5 with integers ",
  Array.from({ length: 5 }, (v, i) => i)
);
console.log(
  "Alter values of flatArray ",
  Array.from(flatArray, (v) => v * 2)
);

// Array.forEach

Array.from("Narasimhan").forEach((e, i, a) => {
  console.log("element is ", e);
  console.log("index is ", i);
  console.log("array is ", a);
});

const colors1 = ["red", "green", "blue"];
const colors2 = ["black", "pink", "violet"];
// concat function
const mergedColors = colors1.concat(colors2);
// sort function - string sorting
console.log("mergedColors is ", mergedColors);
mergedColors.sort((a, b) => (a < b ? -1 : 1));
console.log("mergedColors is ", mergedColors);
// sort function - integer sorting asc
const sortedIntArray1 = flatArray.sort();
console.log(sortedIntArray1);
// - integer sorting desc
const sortedIntArray2 = flatArray.sort((a, b) => b - a);
console.log(sortedIntArray2);

// find and findIndex
const r = mergedColors.find((e) => e.indexOf("r") > 0);
console.log("Find result is ", r);
const arrOfObj = [
  { id: 101, name: "Person 1", age: 55 },
  { id: 102, name: "Person 2", age: 60 },
  { id: 103, name: "Person 3", age: 65 },
];
objToFind = 101;
let obj = arrOfObj.find((e) => e.id === objToFind);
console.log("Obj found is :: ", obj);
obj = arrOfObj.find(({ age }) => age > 60); // with obj destructuring
const indexOfObj = arrOfObj.findIndex(({ id }, i, a) => id === objToFind);
console.log("Obj found is :: ", obj);
console.log("Obj found index is :: ", indexOfObj);

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
console.log("Is Prime : ", [4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log("Is Prime : ", [4, 5, 8, 12].find(isPrime));
// also find function visits indices which are empty and deleted

// filters - creates another array with filtered values
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((e, i, a) => e.length > 6);
console.log("Filtered words are ", result);
console.log(
  "Prime numbers are ",
  [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].filter(isPrime)
);

// includes - check if element exists in an array
// doesn't work with objects, use find or some
console.log(
  "Includes restult on obj array : ",
  arrOfObj.includes({ id: 101, name: "Person 1", age: 55 })
);
console.log("Includes restult on int array : ", [4, 5, 8, 12].includes(12));

// join - default is comma seperated
const joinedStr = mergedColors.join(" ");
console.log("Joined string is ", joinedStr);

const func = function () {
  console.log("After joining arguments :: ", Array.from(arguments).join(""));
};
func("N", "a", "r", "a", "s", "i", "m", "h", "a", "n");

// keys and values - if we dont want to write for loop using length of array, we can use this to loop over array
const iterator = mergedColors.keys();
const vals = mergedColors.values();
for (const key of iterator) {
  console.log("key is :: ", key);
}
for (const val of vals) {
  console.log("val is :: ", val);
}

// push, pop and shift
let sports = ["soccer", "baseball"];
let len = sports.push("football", "swimming");
console.log("Updated array after push ", sports);
console.log("Updated array length after push ", len);

const poppedElement = sports.pop();
console.log("Updated array after pop ", sports);
console.log("poppedElement is ", poppedElement);
const shiftedElement = sports.shift();
console.log("Updated array after shift ", sports);
console.log("shiftedElement is ", shiftedElement);

// reverse - destructive
const array1 = ["one", "two", "three"];
array1.reverse();
console.log("reversed array1 is :", array1);
// applying on object
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
[].reverse.call(obj1);
console.log("Reversed object is : ", obj1);
