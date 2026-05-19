class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let largest=""
        for(let i=0; i<s.length; i++){
            let odd =this.expand(s,i,i)
            let even = this.expand(s,i,i+1)
            if(odd.length>largest.length) largest = odd
            if(largest.length<even.length) largest = even
        }
        return largest
    }

    expand(s, left, right) {
        while(left>=0 && right<s.length && s[left]==s[right]) {
            right++
            left--
        }
        return s.slice(left+1, right)
    }
}
