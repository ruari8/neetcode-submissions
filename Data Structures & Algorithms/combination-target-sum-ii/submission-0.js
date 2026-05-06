class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a-b) 
        let result = []
        this.dfs(0, [], candidates, result, target)
        return result
    }

    dfs(start, current, candidates, result, target) {
        if(target == 0) result.push([...current])
        else if (target<0) return
        for(let i=start; i<candidates.length; i++) {
            if(i > start && candidates[i] == candidates[i-1]) continue  
            current.push(candidates[i])
            this.dfs(i+1, current, candidates, result, target-candidates[i])
            current.pop()
        }
    }
}
