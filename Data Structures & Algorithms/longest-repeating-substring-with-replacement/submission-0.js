class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map()
        let left = 0
        let maxLen = 0

        for(let right=0; right<s.length; right++) {
            if(map.has(s[right])) map.set(s[right], map.get(s[right])+1)
            else map.set(s[right], 1)

            let replacements = (right-left+1) - Math.max(...map.values())
            //dont get this bit
            if(replacements>k) {
                map.set(s[left], map.get(s[left])-1)
                left++
            }
            maxLen = Math.max(maxLen, right - left + 1)
        }
        return maxLen
    }
}
