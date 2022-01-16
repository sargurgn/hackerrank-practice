function arrayManipulation(n, queries) {
  const arr = Array.from({ length: n }, (v, i) => 0);
  for (let i = 1; i < n; i++) {
    for (let row = 0; row < queries.length; row++) {
      const r = queries[row];
      if (i >= r[0] && i <= r[1]) {
        arr[i - 1] += r[2];
      }
    }
  }

  const sortedArr = [...arr].sort((a, b) => a - b);
  const maxVal = sortedArr[sortedArr.length - 1];
  return maxVal;
}

// arrayManipulation(5, [
//     [ 1, 2, 100 ],
//     [ 2, 5, 100 ],
//     [ 3, 4, 100 ]
// ])
// console.log(
//   arrayManipulation(10, [
//     [1, 5, 3],
//     [4, 8, 7],
//     [6, 9, 1],
//   ])
// );
console.time('arrayManipulation')
console.log(
  arrayManipulation(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ])
);
console.timeEnd('arrayManipulation')