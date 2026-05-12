class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let result = 0
        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[0].length; j++) {
                if(grid[i][j] == "1") {
                    result++
                    this.dfs(grid, i, j)
                }
            }
        }
        return result
    }

    dfs(grid, i, j) {
        if(i < 0 || i >= grid.length) return
        if(j < 0 || j >= grid[0].length) return
        if(grid[i][j] !== "1") return
        grid[i][j] = "#"
        
        this.dfs(grid, i, j-1)
        this.dfs(grid, i, j+1)
        this.dfs(grid, i-1, j)
        this.dfs(grid, i+1, j)
    }
}
