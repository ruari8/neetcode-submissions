class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        for(let i=0; i<nums.length;i++) {
            if(i == 0 || i == 1) continue
            else if(i == 2) nums[i] += nums[i-2]
            else nums[i] += Math.max(nums[i-2], nums[i-3])
        }
        if(nums.length == 1) return nums[0]
        else return Math.max(nums[nums.length-1], nums[nums.length-2])
    }
}
