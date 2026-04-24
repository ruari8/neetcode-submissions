// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr = head
        let map = new Map()
        map.set(null, null)
        while(curr!=null) {
            let originalNode = curr
            let copyNode = new Node(originalNode.val)
            map.set(originalNode, copyNode)
            curr = curr.next
        }
        let curr2 = head
        while(curr2!=null) {
            map.get(curr2).random = map.get(curr2.random)
            map.get(curr2).next = map.get(curr2.next)
            curr2 = curr2.next
        }
        return map.get(head)
    }
}
