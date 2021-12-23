function diagonalDifference(matrix) {
    console.log('Input matrix: ', matrix)
    let sum1 = 0;
    for (let row = 0; row < matrix.length; row++) {
        sum1 += matrix[row][row]
    }
    let sum2 = 0;
    let col = matrix.length - 1
    for (let row = 0; row < matrix.length; row++) {
        sum2 += matrix[row][col];
        col--;
    }
    console.log(Math.abs(sum1 - sum2));
}
diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
// diagonalDifference([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]);