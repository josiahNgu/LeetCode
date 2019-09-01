/*Time complexity: O(A*C) - Where A is amount, and C is number of coins
  Space Complexity:  - O(A)- we created a DP Array of length A+1
*/
function coinChange(coins, amount) {
    let dpMinCoins= new Array(amount+1).fill(Infinity);
    dpMinCoins[0] = 0;
    for(let i =1 ; i<dpMinCoins.length;i++){
        for(let j=0;j<coins.length;j++){
            const coinValue = coins[j];
            if(coinValue <=i){
                dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1 , dpMinCoins[i]);
            }
        }
    }
    // why do we need to use dpMincoins.length-1  and can't use pop
    return dpMinCoins[dpMinCoins.length-1] === Infinity ? -1: dpMinCoins.pop();
}

module.exports = coinChange;
 