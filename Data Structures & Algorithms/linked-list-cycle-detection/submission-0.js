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
     * @return {boolean}
     */
    hasCycle(head) {
        let index = false
        let slow = head
        let fast = head
        while(fast != null && fast.next != null) {
            slow = slow.next
            fast = fast.next
            fast = fast.next
            if(fast == slow) {
                index = true
                break
            }
        }
        return index
    }
}
