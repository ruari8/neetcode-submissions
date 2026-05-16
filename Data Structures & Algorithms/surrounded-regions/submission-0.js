class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length
        let cols = board[0].length
        
        // step 1: LHS/RHS
        for(let i = 0; i < rows; i++) {
            if(board[i][0] === 'O') this.dfs(board, i, 0)
            if(board[i][cols-1] === 'O') this.dfs(board, i, cols-1)
        }
        // THS/BHS
        for(let j = 0; j < cols; j++) {
            if(board[0][j] === 'O') this.dfs(board, 0, j)
            if(board[rows-1][j] === 'O') this.dfs(board, rows-1, j)
        }
        
        // step 2: flip
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(board[i][j] === 'O') board[i][j] = 'X'
                if(board[i][j] === 'T') board[i][j] = 'O'
            }
        }
    }

    dfs(board, i, j) {
        //conditions
        if(i < 0 || i >= board.length) return
        if(j < 0 || j >= board[0].length) return
        if(board[i][j] != "O") return
        //convert to T if conditions are safe
        board[i][j] = "T"
        //check up,down,left,right - dfs
        this.dfs(board, i+1, j)
        this.dfs(board, i-1, j)
        this.dfs(board, i, j+1)
        this.dfs(board, i, j-1)
    }
}
