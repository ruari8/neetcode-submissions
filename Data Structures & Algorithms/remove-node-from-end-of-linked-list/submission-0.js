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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0
        let firstPass = head
        //go forwards
        while(firstPass != null) {
            firstPass = firstPass.next
            length++
        }
        let index = 0
        let secondPass = head
        let prev = null
        if (length - n === 0) return head.next
        while(secondPass != null) {
            if(index==length-n) {
                secondPass = prev
                secondPass.next = secondPass.next.next
                break;
            }
            prev = secondPass
            secondPass = secondPass.next
            index++
        }
        return head
    }
}
