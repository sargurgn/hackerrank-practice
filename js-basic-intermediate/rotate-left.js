function rotateLeft(d, arr) {
  let start = 0;
  while (start < d) {
    const a = arr.shift();
    arr.push(a);
    start++;
  }
  return arr;
}

rotateLeft(4, [1, 2, 3, 4, 5]);
