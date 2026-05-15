class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let pacific = new Set()
        let atlantic = new Set()
        let rows = heights.length
        let cols = heights[0].length
        
        // start DFS from every pacific border cell
        for(let i = 0; i < rows; i++) this.dfs(heights, i, 0, pacific, heights[i][0])
        for(let j = 0; j < cols; j++) this.dfs(heights, 0, j, pacific, heights[0][j])
        
        // start DFS from every atlantic border cell
        for(let i = 0; i < rows; i++) this.dfs(heights, i, cols-1, atlantic, heights[i][cols-1])
        for(let j = 0; j < cols; j++) this.dfs(heights, rows-1, j, atlantic, heights[rows-1][j])
        
        // find cells in both sets
        let result = []
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(pacific.has(`${i},${j}`) && atlantic.has(`${i},${j}`)) {
                    result.push([i, j])
                }
            }
        }
        return result
    }

    dfs(heights, row, col, visited, prevHeight) {
        if(row < 0 || row >= heights.length) return
        if(col < 0 || col >= heights[0].length) return
        if(heights[row][col] < prevHeight) return
        if(visited.has(`${row},${col}`)) return
        visited.add(`${row},${col}`)
        this.dfs(heights, row+1, col, visited, heights[row][col])
        this.dfs(heights, row-1, col, visited, heights[row][col])
        this.dfs(heights, row, col+1, visited, heights[row][col])
        this.dfs(heights, row, col-1, visited, heights[row][col])
    }
}
