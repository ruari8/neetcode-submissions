class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        for(let i=0; i<board.length; i++) {
            for(let j=0; j<board[0].length; j++) {
                if(board[i][j] == word[0] && this.dfs(i, j, 0, board, word)) return true
            }
        }
        return false
    }

    dfs(i, j, tracker, board, word) {
        if(tracker == word.length) return true
        if(i>=board.length || i<0) return
        if(j>=board[0].length || j<0) return
        if(board[i][j] == '#') return
        if(board[i][j] !== word[tracker]) return false

        let temp = board[i][j]
        board[i][j] = '#'
        let result = this.dfs(i+1, j, tracker+1, board, word) || 
            this.dfs(i-1, j, tracker+1, board, word) || 
            this.dfs(i, j+1, tracker+1, board, word) || 
            this.dfs(i, j-1, tracker+1, board, word)
        board[i][j] = temp
        return result
    }

}
