class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows, cols = len(board), len(board[0])
        
        for i in range(rows):
            if board[i][0] == 'O': self.dfs(board, i, 0)
            if board[i][cols-1] == 'O': self.dfs(board, i, cols-1)
        for j in range(cols):
            if board[0][j] == 'O': self.dfs(board, 0, j)
            if board[rows-1][j] == 'O': self.dfs(board, rows-1, j)
            
        for i in range(rows):
            for j in range(cols):
                if board[i][j] == 'O': board[i][j] = 'X'
                if board[i][j] == 'T': board[i][j] = 'O'

    def dfs(self, board, i, j):
        if i < 0 or i >= len(board): return
        if j < 0 or j >= len(board[0]): return
        if board[i][j] != 'O': return
        board[i][j] = 'T'
        self.dfs(board, i+1, j)
        self.dfs(board, i-1, j)
        self.dfs(board, i, j+1)
        self.dfs(board, i, j-1)