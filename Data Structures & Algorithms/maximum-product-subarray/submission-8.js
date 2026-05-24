class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let minSoFar = nums[0], maxSoFar = nums[0], result = nums[0]
        for (let i = 1; i < nums.length; i++) {
            const n = nums[i]
            const tempMax = Math.max(n, n * maxSoFar, n * minSoFar)
            minSoFar    = Math.min(n, n * maxSoFar, n * minSoFar)
            maxSoFar    = tempMax
            result = Math.max(result, maxSoFar)
        }
        return result
    }
}
