class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = []
        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[0].length; j++) {
                if(grid[i][j] == 0) queue.push([i,j])
            }
        }
        while(queue.length>0) {
            let [i,j] = queue.shift()
            let directions = [[1,0], [-1,0], [0,1], [0,-1]]
            for(let [down, right] of directions) {
                let row = i + down
                let col = j + right
                if(row < 0 || row >= grid.length) continue
                if(col < 0 || col >= grid[0].length) continue
                if(grid[row][col] == 2147483647) {
                    grid[row][col] = grid[i][j]+1
                    queue.push([row,col])
                }
            }
        }

    }
}
