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
// diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
// diagonalDifference([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]);

function getHourglassSum(matrix, startRow, startCol) {
    const maxLength = 3;
    const maxRowLength = startRow + maxLength;
    const maxColLength = startCol + maxLength;
    let sum = 0;
    const hourGlass = [];
    for (let row = startRow; row < maxRowLength; row++) {
        
        for (let col = startCol; col < maxColLength; col++) {
            if (!((row !== startRow && row !== maxRowLength - 1) && (col === startCol || col === maxColLength - 1))) {
                hourGlass.push(matrix[row][col]);
                sum += matrix[row][col];
            }
        }
    }
    return sum;
}

function TwoDArrayDS(matrix) {
    console.log('Input matrix: ', matrix)
    const sumArr = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            sumArr.push(getHourglassSum(matrix, row, col));
        }
    }
    sumArr.sort((a, b) => a - b);
    return sumArr[sumArr.length - 1];
}
console.log(TwoDArrayDS([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]));

