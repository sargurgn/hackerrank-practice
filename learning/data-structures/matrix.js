const inputMatrix = [
  [107, 54, 128, 15],
  [12, 75, 110, 138],
  [100, 96, 34, 85],
  [75, 15, 28, 112],
];

function reverseColumn(matrix, col) {
  const rmatrix = JSON.parse(JSON.stringify(matrix));
  start = 0;
  end = rmatrix.length - 1;
  while (start < end) {
    temp = rmatrix[start][col];
    rmatrix[start][col] = rmatrix[end][col];
    rmatrix[end][col] = temp;
    start++;
    end--;
  }
  return rmatrix;
}

function reverseRow(matrix, row) {
  const rmatrix = JSON.parse(JSON.stringify(matrix));
  let start = 0;
  let end = rmatrix.length - 1;
  while (start < end) {
    temp = rmatrix[row][start];
    rmatrix[row][start] = rmatrix[row][end];
    rmatrix[row][end] = temp;
    start++;
    end--;
  }
  return rmatrix;
}
