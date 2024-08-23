var maxProfit = function (prices) {
  let buy = prices[0];
  let sell = prices[0];
  let maxProfit = 0;

  let i = 0;
  while (i < prices.length) {
    if (prices[i] < buy) {
      buy = prices[i];
      sell = buy;
    }
    if (prices[i] > sell) sell = prices[i];

    if (sell - buy > maxProfit) maxProfit = sell - buy;

    i++;
  }

  return maxProfit;
};

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
const prices3 = [2, 4, 1];

[prices1, prices2, prices3].forEach((prices) => {
  console.log("best time to buy and sell:", prices, maxProfit(prices));
});
