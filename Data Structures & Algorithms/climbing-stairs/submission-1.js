class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n==1) return 1
        if(n==2) return 2
        let result = 2
        let current = 2
        let prev = 1
        for(let i = 2; i<n; i++) {
            result += prev
            prev = current
            current = result
        }
        return result
    }
}
