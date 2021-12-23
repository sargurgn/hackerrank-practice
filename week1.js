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
  const aplh = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let ret = 'pangram';
  str = str.toLowerCase();
  aplh.forEach(a => {
    if (str.indexOf(a) < 0) {
      ret = 'not pangram';
      return ret;
    }
  });
  return ret;
}

// Not working for >=
function PermutingTwoArrays(k, A, B) {
  let Amap = new Map();
  let Bmap = new Map();
  A.map(val => {
    const diff = k - val;
    let count = 1;
    if (Amap.has(diff)) {
     count = Amap.get(diff) + 1;
    }
    Amap.set(diff, count);
  });
  console.log(Amap);
  B.map(val => {
    let count = 1;
    if (Bmap.has(val)) {
     count = Bmap.get(val) + 1;
    }
    Bmap.set(val, count);
  });
  console.log(Bmap);
  let res = 'YES';
  Amap.forEach((value, key) => {
    if (!Bmap.has(key) || Bmap.get(key) < value) {
      console.log('missing ', key);
      res = 'NO';
    }
  });
  return res;
}
