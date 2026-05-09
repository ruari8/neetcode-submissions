class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1) {
            stones.sort((a,b) => b-a)
            let x = stones[1]
            let y = stones[0]
            stones.shift()
            stones.shift()
            if(y - x > 0) stones.push(y - x)
        }
        return stones.length == 0 ? 0 : stones[0]

    }
}
