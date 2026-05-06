class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []
        this.dfs(0, [], nums, target, result)
        return result
    }

    dfs(start, current, nums, target, result) {
        if(target<0)return
        else if(target==0) {
            result.push([...current])
        }
        for(let i = start; i<nums.length; i++) {
            current.push(nums[i])
            this.dfs(i, current, nums, target-nums[i], result)
            current.pop()
        }
    }
}
