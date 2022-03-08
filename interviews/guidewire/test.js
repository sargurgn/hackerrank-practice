function solution(A) {
    A = A.sort((a,b) => a - b);
    if (A[0] < 0 && A[A.length - 1] < 0)
        return 1;
    for (let i = A[0]; i < A[A.length - 1]; i++) {
        if (!A.includes(i)) {
            return i;
        }
    }
    return A[A.length - 1] + 1;
}

function sol(N) {
    var arr = N.toString().split('');
    console.log(arr);
    arr.sort((a, b) => b - a);
    console.log(arr);
    console.log(parseInt(arr.join('')));
}

function sol2(A, K, L) {
    if (A.length < K + L)
        return -1;

    let startIndex = 0;
    let start = 0;
    let aliceMax = findMaxSum(0, );
    for (let i = 0; i < A.length; i++) {
        let tempSum = 0;
        for (let j = i; j < i + K; j++) {
            tempSum += A[j];
        }
        if (aliceMax < tempSum) {
            aliceMax = tempSum
        }
        start = i;
    }
    if (start + 1 < L) {
        start = start + K;
    }

    let boxMax = findMaxSum(start, A, L);
    console.log('boxMax is ', boxMax);
    console.log('final result', aliceMax + boxMax);
    return aliceMax + boxMax;
}

function findMaxSum(start, A, L) {
    let max = 0;
    for (let i = start; i < A.length; i++) {
        let tempSum = 0;
        for (let j = 0; j < L; j++) {
            tempSum += A[j];
        }
        if (max < tempSum) {
            max = tempSum
        }
    }
    return max;
}

sol2([6, 1, 4, 6, 3, 2, 7, 4], 3, 2);
sol2([10, 19, 15], 2, 2);