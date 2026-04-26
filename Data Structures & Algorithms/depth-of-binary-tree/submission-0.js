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
    maxDepth(root) {
        if(root) {
            return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
            // 1 + Math.max(1+max(0,0), 1+max(1+max(0,0),0)) = 1+max(1,2) = 3
        } else {
            return 0
        }
         

    }
}
