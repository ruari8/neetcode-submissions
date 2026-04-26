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
        this.max = 0
    }

    diameterOfBinaryTree(root) {
        this.dfs(root)
        return this.max
    }

    dfs(node) {
        if(node === null) return 0
        let left = this.dfs(node.left)
        let right = this.dfs(node.right)
        
        this.max = Math.max(this.max, left + right)  // track diameter
        
        return 1 + Math.max(left, right)  // return depth to parent
    }
}
