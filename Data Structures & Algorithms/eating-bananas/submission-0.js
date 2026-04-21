class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let fastest = Math.max(...piles)
        let slowest = 1
        let middle = Math.floor((fastest+slowest)/2)
        let result = fastest
        while(slowest<=fastest) {
            let index=0
            let count=0
            while(index < piles.length) {
                count += Math.ceil(piles[index]/middle)
                index++
            }
            if(count<=h){
                result = middle
                fastest = middle - 1
                middle = Math.floor((fastest+slowest)/2)
            } else if(count>h) {
                slowest = middle + 1
                middle = Math.floor((fastest+slowest)/2)
            }
        }
        return result
    }
}
