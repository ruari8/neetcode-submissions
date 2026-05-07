class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = []
        let open = 0
        let close = 0
        this.dfs('', open, close, n, result)
        return result
    }

    dfs(current, open, close, n, result) {
        if(current.length == n*2) {
            result.push(current)
            return
        }
        if(open<n) this.dfs(current + '(', open+1, close, n, result)
        if(close<open) this.dfs(current + ')', open, close+1, n, result)
    }
}
