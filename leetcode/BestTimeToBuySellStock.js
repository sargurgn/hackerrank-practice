const maxProfit = function (prices) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] >= prices[i]) {
        console.log(prices[i] + " " + prices[j]);
        if (prices[i] < min) {
          min = prices[i];
        }
        if (prices[j] > max) {
          max = prices[j];
        }
      }
    }
  }
  return max - min;
};

// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([7, 6, 4, 3, 1]);

const maxProfitLinear = function (prices) {
  let min = {index: -1, value: Infinity};
  let max = {index: prices.length, value: -Infinity};
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min.value && i < max.index) {
      min.value = prices[i];
      min.index = i;
    }
    if (prices[i] > max.value && i > min.index) {
      max.value = prices[i];
      max.index = i;
    }
    console.log('Min:: ' + min.index + ',' + min.value + '  Max:: ' + max.index + ',' + max.value);
  }
  
  return (max.value === -Infinity) ? 0 : (max.value - min.value);

};
// console.log(maxProfitLinear([7, 1, 5, 3, 6, 4]));
// console.log(maxProfitLinear([7, 6, 4, 3, 1]));

// console.log(maxProfitLinear([2, 4, 1]));
// console.log(maxProfitLinear([2,1,2,1,0,1,2]));

console.log(maxProfitLinear([2, 4, 1, 0, 10]));