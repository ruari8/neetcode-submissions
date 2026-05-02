/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    constructor() {
        this.count = 0
    }

    goodNodes(root) {
        this.dfs(root, -Infinity)
        return this.count
    }
    //skip if, skip if, node.left 2 (1)
    //skip if, 2>1 max=2 count=2, node.left (2)
    //skip if 3>2 max=3 count=3, node.left (3)
    //return for left and right (3)
    //skip if 4>3 max=4 count=4 ))(4)
    //return left and right (4)
    //return right (2)
    //right of root - skip if, skip if (-1>4) (-1)
    //return left and right(-1)
    dfs(node, maxSoFar) {
        if(node == null) return 
        if(node.val>=maxSoFar) {
            maxSoFar = node.val
            this.count++
        }
        this.dfs(node.left, maxSoFar)
        this.dfs(node.right, maxSoFar)
    }
}
