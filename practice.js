function matrixTransposeAndReverse(matrix) {
    console.log('Input ', matrix)
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < row; col++) {
            let temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp
        }
    }
    return matrix.reverse();
}
// console.log(matrixTranspose([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]));
