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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let queue = [root]
        let results = []
        while(queue.length != 0) {
            let levelSize = queue.length
            let level = []
            for(let i = 0; i < levelSize; i++) {
                let node = queue.shift()  // take from front
                level.push(node.val)
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            results.push(level[level.length-1])
        }
        return results
    }
}
