class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count=0
        for(let i=0; i<s.length; i++){
            count = this.expand(s,i,i, count)
            count = this.expand(s,i,i+1, count)
        }
        return count
    }

    expand(s, left, right, count) {
        while(left>=0 && right<s.length && s[left]==s[right]) {
            count++
            right++
            left--
        }
        return count
    }
}
