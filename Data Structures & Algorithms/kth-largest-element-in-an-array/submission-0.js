class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // nums.sort((a,b) => a-b)
        // return nums[nums.length-k]
        for(let i = 0; i < k; i++) {
            let max = Math.max(...nums)
            if(i == k-1) return max
            nums.splice(nums.indexOf(max), 1)
        }
    }
}
