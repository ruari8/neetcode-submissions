class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n==1) return 1
        if(n==2) return 2
        let prev = 1
        let curr = 2
        for(let i = 2; i < n; i++) {
            let temp = curr
            curr = curr + prev
            prev = temp
        }
        return curr
    }
}
