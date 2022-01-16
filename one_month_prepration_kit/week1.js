function PlusMinus(arr) {
  let zeroCount = 0;
  let postiveCount = 0;
  let negativeCount = 0;
  arr.map((val) => {
    if (val === 0) {
      zeroCount++;
    } else {
      val > 0 ? postiveCount++ : negativeCount++;
    }
  });
  console.log((postiveCount / arr.length).toPrecision(4));
  console.log((negativeCount / arr.length).toPrecision(4));
  console.log((zeroCount / arr.length).toPrecision(4));
}

function MiniMaxSum(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;
  arr.map((val) => {
    return (sum += val);
  });
  console.log(sum - arr[arr.length - 1] + " " + (sum - arr[0]));
}

function TimeConversion(s) {
  const toReplace = s.indexOf("PM") > 0 ? "PM" : "AM";
  let arr = s.split(":");
  let newTime = "";
  if (s.indexOf("PM") > 0) {
    arr[0] = parseInt(arr[0]) < 12 ? parseInt(arr[0]) + 12 : arr[0];
  } else if (s.indexOf("AM") > 0) {
    arr[0] = parseInt(arr[0]) < 12 ? parseInt(arr[0]) : 0;
  }
  if (arr[0] <= 10) {
    arr[0] = "0" + arr[0];
  }
  arr[arr.length - 1] = arr[arr.length - 1].replace(toReplace, "");
  arr.map((val, index) => (newTime += index > 0 ? ":" + val : val));
  s = newTime;
  console.log(s);
}

function SparseArrays(strings, queries) {
  let countMap = new Map();
  const result = [];
  strings.map((str) => {
    let count = 1;
    if (countMap.has(str)) {
      let val = countMap.get(str);
      count = val + 1;
    }
    countMap.set(str, count);
  });
  queries.map((qur) => result.push(countMap.has(qur) ? countMap.get(qur) : 0));
  return result;
}

function LonelyInteger(a) {
  let countMap = new Map();
  a.map((x) => {
    let count = 1;
    if (countMap.has(x)) {
      let val = countMap.get(x);
      count = val + 1;
    }
    countMap.set(x, count);
  });
  let retVal;
  countMap.forEach((value, key) => {
    if (value === 1) {
      retVal = key;
    }
  });
  return retVal;
}

function CountingSort1(arr) {
  let result = Array(100).fill(0);
  arr.map((x) => {
    result[x] += 1;
  });
  return result;
}

function Pangrams(str) {
  const aplh = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let ret = "pangram";
  str = str.toLowerCase();
  aplh.forEach((a) => {
    if (str.indexOf(a) < 0) {
      ret = "not pangram";
      return ret;
    }
  });
  return ret;
}

function PermutingTwoArrays(k, A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  let res = "YES";
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      res = "NO";
      break;
    }
  }
  return res;
}
// console.log(PermutingTwoArrays(10, [2, 1, 3], [7, 8, 9]));
// console.log(PermutingTwoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));

function SubArrayDivision(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (m == 1 && s[i] == d) {
      return 1;
    }
    let j = i;
    let sum = 0;
    let sumVal = [];
    while (sum < d && sumVal.length < m && j < s.length) {
      sum += s[j];
      sumVal.push(s[j]);
      j++;
    }
    if (sum === d && sumVal.length === m) {
      count++;
    }
  }
  return count;
}
// console.log('** is ', SubArrayDivision([2,2,1,3,2], 4, 2));

function flippingBits(n) {
  let k = n.toString(2).padStart(32, "0");
  let res = "";
  for (let char of k) {
    res += char == "0" ? "1" : "0";
  }
  return parseInt(res, 2);
}
// console.log(flippingBits(3));

// Mock Test
function flippingMatrix(matrix) {
  let sum = 0;
  for (let row = 0; row < matrix.length/2; row++) {
    for (let col = 0; col < matrix.length/2; col++) {
        sum += Math.max(Math.max(matrix[row][col], matrix[row][matrix.length - col - 1]), Math.max(matrix[matrix.length - row - 1][col], matrix[matrix.length - row - 1][matrix.length - col - 1]));                
    }
  }
  return sum;
}

console.log(flippingMatrix([
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
]));
