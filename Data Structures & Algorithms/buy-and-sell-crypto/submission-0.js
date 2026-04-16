class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minimum = prices[0];
        for(let i=0; i<prices.length; i++) {
            if(prices[i] < minimum) minimum = prices[i]
            if((prices[i] - minimum) > maxProfit) maxProfit = (prices[i] - minimum)
        }
        return maxProfit
        
        // let maxProfit = 0;
        // for(let i=0; i<prices.length-1; i++) {
        //     let max = Math.max(...prices.slice(i+1))
        //     let profit = max-prices[i]
        //     if(maxProfit < profit) maxProfit = profit
        // }
        // return maxProfit

        // let maxProfit = 0;
        // for(let i=0; i<prices.length-1; i++) {
        //     let biggest = 0;
        //     for(let j=i+1; j<prices.length; j++) {
        //         let current = prices[j] - prices[i];
        //         if(current > biggest) biggest = current;
        //     }
        //     if(biggest > maxProfit) maxProfit = biggest;
        // }
        // return maxProfit;

        // find min day, only look beyond that
        // let min = Math.min(...prices)
        // const minIndex = prices.indexOf(Math.min(...prices));
        // if (minIndex == prices.length) return 0;
        // let profitArray = prices.slice(minIndex)
        // let max = Math.max(...profitArray)
        // let maxIndex = prices.indexOf(Math.max(...profitArray))
        // return max-min;
    }
}
