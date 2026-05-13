/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node, map = new Map()) {
        if(!node) return null
        if(map.has(node.val)) return map.get(node.val)
        let clone = new Node(node.val)
        map.set(clone.val, clone)
        for(let neighbor of node.neighbors) {
            clone.neighbors.push(this.cloneGraph(neighbor, map))
        }
        return clone
    }
}
