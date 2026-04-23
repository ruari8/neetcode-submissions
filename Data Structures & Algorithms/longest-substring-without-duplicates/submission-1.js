class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let left = 0
        let length = 0
        for(let i=0; i<s.length; i++) {
            if(set.has(s[i])) {
                length = Math.max(length, set.size)
                //clear the set with everything before s[i] and s[i]
                while(set.has(s[i])) {
                    set.delete(s[left])
                    left++
                }
                set.add(s[i])
            } else {
                set.add(s[i])
            }
        }
        if(set.size > length) length = set.size
        return length
    }
}
