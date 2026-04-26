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
     * @return {boolean}
     */
    isBalanced(root) {
        let val = this.dfs(root)
        if(val == -1) return false
        else return true
    }

    dfs(node) {
        if(node === null) return 0
        let left = this.dfs(node.left)
        let right = this.dfs(node.right)
        
        if(left == -1 || right == -1) return -1
        if(Math.abs(left - right) > 1) return -1
        
        return 1 + Math.max(left, right)  // return depth to parent
    }
}
