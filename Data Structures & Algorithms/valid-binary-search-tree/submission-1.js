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
    check(node, low, high) {
        if (node === null) {
            return true;
        }
        if (!(node.val > low && node.val < high)) {
            return false;
        }
        return (
            this.check(node.left, low, node.val) &&
            this.check(node.right, node.val, high)
        );
    }

    isValidBST(root) {
        return this.check(root, -Infinity, Infinity);
    }
}
