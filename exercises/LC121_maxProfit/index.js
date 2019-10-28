/**
 * Time complexity : O(N) - loop through each value in the array once
 * Space complexity: O(1) - lowestPrice variable
 * 
 */

var maxProfit = function(prices) {
        if (prices.length < 2) return 0;
        let lowestPrice = prices[0];
        let maxProfit =0;
        for(let i =0; i<prices.length;i++){
            maxProfit = Math.max(maxProfit,prices[i]-lowestPrice);
            lowestPrice = Math.min(lowestPrice,prices[i]);
        }
        return maxProfit;
};

module.exports = maxProfit;
