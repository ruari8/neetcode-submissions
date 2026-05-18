class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        for(let i=cost.length-1; i>=0; i--) {
            if(i == cost.length-1 || i == cost.length-2) cost[i] = cost[i]
            else cost[i] = cost[i] + Math.min(cost[i+1], cost[i+2])
        }
        return Math.min(cost[0], cost[1])
    }
}
