class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let minSoFar = nums[0]
        let maxSoFar = nums[0]
        let result = nums[0]
        for(let i=1; i<nums.length; i++) {
            let tempMin = minSoFar
            if(nums[i] < 0) {
                minSoFar = Math.min(nums[i], minSoFar*nums[i], maxSoFar*nums[i])
                maxSoFar = Math.max(nums[i], tempMin*nums[i], maxSoFar*nums[i])
            } else if(nums[i] == 0) {
                minSoFar=0
                maxSoFar=0
            } else {
                minSoFar = Math.min(nums[i], nums[i]*minSoFar)
                maxSoFar = Math.max(nums[i], maxSoFar*nums[i])
            }
            result = Math.max(result, maxSoFar)
            console.log(result)
        }
        return result
    }
}
