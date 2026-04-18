class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //rows
        for(let i=0; i<board.length;i++) {
            let set = new Set()
            for(let j=0; j<board[0].length; j++) {
                if(set.has(board[i][j]) && board[i][j]!=".") return false
                else set.add(board[i][j])
            }
        }
        //columns
        for(let j=0; j<board[0].length;j++) {
            let set = new Set()
            for(let i=0; i<board.length; i++) {
                if(set.has(board[i][j]) && board[i][j]!=".") return false
                else set.add(board[i][j])
            }
        }

        //3x3
        let boardRow = [0,3,6]
        let boardCol = [0,3,6]

        for(let a=0; a<boardRow.length;a++) {
            for(let b=0; b<boardCol.length; b++) {
                let set = new Set()
                for(let i=boardRow[a]; i<boardRow[a]+3;i++) {
                    for(let j=boardCol[b]; j<boardCol[b]+3; j++) {
                        if(set.has(board[i][j]) && board[i][j]!=".") return false
                        else set.add(board[i][j])
                    }
                }
            }
        }

        return true
    }
}
