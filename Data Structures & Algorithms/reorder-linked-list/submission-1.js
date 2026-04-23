/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //split
        let slow = head
        let fast = head
        while(fast != null && fast.next != null) {
            slow = slow.next
            fast = fast.next.next
        }
        let secondHalf = slow.next
        slow.next = null  // cut it
        let firstHalf = head
        //reverse
        let prev = null
        let node = secondHalf
        while(node != null) {
            let next = node.next
            node.next = prev
            prev = node
            node = next
        }
        secondHalf = prev
        // merge
        // no idea how tf this works
        while(firstHalf != null && secondHalf != null) {
            let next1 = firstHalf.next
            let next2 = secondHalf.next
            
            firstHalf.next = secondHalf
            secondHalf.next = next1
            
            firstHalf = next1
            secondHalf = next2
        }
    }
}
