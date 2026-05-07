class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a,b) => a-b)
        let result = []
        this.dfs(0, [], nums, result)
        return result
    }

    dfs(start, current, nums, result) {
        result.push([...current])
        for(let i=start;i<nums.length;i++) {
            if(i > start && nums[i] === nums[i-1]) continue
            current.push(nums[i])
            this.dfs(i+1, current, nums, result)
            current.pop()
        }
    }
}
