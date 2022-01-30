function sockMerchant(n, arr) {
    let mappingObj = {};
    let totalPairs = 0;
    for (let i = 0; i < n; i++) {
        var val = mappingObj[arr[i]] ? mappingObj[arr[i]] + 1 : 1;
        mappingObj[arr[i]] = val;
        if ((val / 2) >= 1 && (val % 2) == 0) {
            totalPairs++;
        }
    }
    return totalPairs;
}
// console.log(sockMerchant(11, [10, 20, 20, 10, 10, 30, 50, 10, 20, 30, 50]));

function pageCount(n, p) {
    let p1 = Math.floor(p / 2);
    let p2 = Math.floor((n - p) / 2);
    if (n % 2 === 0 && p % 2 > 0) {
        p2 ++; 
    }
    console.log('For ' + p + ' :: ' + p1 + ',' + p2);
    return Math.min(p1, p2);
}
// console.log('Pages to turn is :: ', pageCount(9, 1));
// console.log('Pages to turn is :: ', pageCount(9, 2));
// console.log('Pages to turn is :: ', pageCount(9, 3));
// console.log('Pages to turn is :: ', pageCount(9, 4));
// console.log('Pages to turn is :: ', pageCount(9, 5));
// console.log('Pages to turn is :: ', pageCount(9, 6));
// console.log('Pages to turn is :: ', pageCount(9, 7));
// console.log('Pages to turn is :: ', pageCount(9, 8));
// console.log('Pages to turn is :: ', pageCount(9, 9));

// console.log('Pages to turn is :: ', pageCount(6, 1));
// console.log('Pages to turn is :: ', pageCount(6, 2));
// console.log('Pages to turn is :: ', pageCount(6, 3));
// console.log('Pages to turn is :: ', pageCount(6, 4));
// console.log('Pages to turn is :: ', pageCount(6, 5));
// console.log('Pages to turn is :: ', pageCount(6, 6));

function maxMin(k, arr) {
    arr = arr.sort((a, b) => a < b ? 1 : -1);
    console.log(arr);
    let min = Number.MAX_VALUE;
    console.log(arr.length - k + 1);
    for(let i = 0; i < arr.length - k + 1; i++) {
        const val = arr[i] - arr[k + i - 1];
        console.log(arr[i] + ',' + arr[k + i - 1] + '=' + val);
        
        min = min > val ? val : min;
    }
    return min;
}

// console.log(maxMin(5, [4504,1520,5857,4094,4157,3902,822,6643,2422,7288,8245,9948,2822,1784,7802,3142,9739,5629,5413,7232]));

function makeMove(n) {
    const originalVal = n;
    if (isPowerOfTwo(n)) {
        return n / 2;
    } else {
        return originalVal - (Math.pow(2, parseInt(Math.log(n) / Math.log(2), 10)));
    }
}

function isPowerOfTwo(n) {
    return parseInt( (Math.ceil((Math.log(n) / Math.log(2))))) == parseInt( (Math.floor(((Math.log(n) / Math.log(2))))));
}

function counterGame(n) {
    let player = 'Louise';
    while (n > 1) {
        n = makeMove(n);
        console.log('Player is ' + player + ' Ret val is ', n);
        if (n === 1) {
            return player;
        } else {
            player = (player === 'Richard') ? 'Louise' : 'Richard';
        }
    }
}

console.log(counterGame(20));
