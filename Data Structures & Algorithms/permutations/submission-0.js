class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []
        this.dfs(0, [], nums, result)
        return result
    }

    dfs(start, current, nums, result) {
        if(current.length == nums.length) result.push([...current])
        for(let i=0; i<nums.length; i++) {
            if(current.includes(nums[i])) continue
            current.push(nums[i])
            this.dfs(i+1, current, nums, result)
            current.pop()
        }
    }
}
