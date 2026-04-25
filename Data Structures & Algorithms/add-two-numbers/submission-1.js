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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let number1 = ""
        let number2 = ""
        while(l1!=null) {
            number1 = l1.val + number1
            l1 = l1.next
        }
        while(l2!=null) {
            number2 = l2.val + number2
            l2 = l2.next
        }
        let total = BigInt(number1)+BigInt(number2)
        total = String(total)
        let answer = new ListNode()
        let curr = answer
        for(let i=total.length-1; i>=0; i--) {
            curr.val = BigInt(total[i])
                if(i > 0) {
                    curr.next = new ListNode()
                    curr = curr.next
                } else {
                    curr.next = null
                }
        }
        return answer
        
    }
}
