class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let duplicate = nums.slice(1)
        for(let i=0; i<nums.length-1;i++) {
            if(i == 0 || i == 1) continue
            else if(i == 2) nums[i] += nums[i-2]
            else nums[i] += Math.max(nums[i-2], nums[i-3])
        }

        for(let i=1; i<duplicate.length;i++) {
            if(i == 0 || i == 1) continue
            else if(i == 2) duplicate[i] += duplicate[i-2]
            else duplicate[i] += Math.max(duplicate[i-2], duplicate[i-3])
        }
        if(nums.length == 1) return nums[0]
        if(nums.length === 2) return Math.max(nums[0], nums[1])
        else return Math.max(nums[nums.length-2], nums[nums.length-3], duplicate[duplicate.length-1], duplicate[duplicate.length-2])
    }
}
