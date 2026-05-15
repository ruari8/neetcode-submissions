class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = []
        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[0].length; j++) {
                if(grid[i][j] == 2) queue.push([i,j])
            }
        }
        let minutes = 0
        while(queue.length>0) {
            let size = queue.length
            for(let k=0; k<size; k++) {
                let [i,j] = queue.shift()
                let directions = [[1,0], [-1,0], [0,1], [0,-1]]
                for(let [down, right] of directions) {
                    let row = i + down
                    let col = j + right
                    if(row < 0 || row >= grid.length) continue
                    if(col < 0 || col >= grid[0].length) continue
                    if(grid[row][col] == 1) {
                        grid[row][col] = 2
                        queue.push([row, col])
                    }
                }
            }
            minutes++
        }
        minutes--
        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[0].length; j++) {
                if(grid[i][j] == 1) return -1
            }
        }
        return Math.max(0, minutes)
    }
}
