class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result=[]
        this.dfs(0, [], nums, result)
        return result
    }

    dfs(start, current, nums, result) {
        result.push([...current])
        for(let i = start; i<nums.length; i++) {
            current.push(nums[i])
            this.dfs(i+1, current, nums, result)
            current.pop()
        }
    }
}
