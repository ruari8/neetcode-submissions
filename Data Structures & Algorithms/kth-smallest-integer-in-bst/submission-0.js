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
     * @param {number} k
     * @return {number}
     */
    constructor() {
        this.count = 0
        this.answer = null
    }

    inorder(root, k) {
        if(root == null) return;
        this.kthSmallest(root.left, k)
        this.count++;
        if(this.count == k) {
            this.answer = root.val;
            return;
        }
        this.kthSmallest(root.right, k)
    }

    kthSmallest(root, k) {
        this.inorder(root,k)
        return this.answer
    }
}
