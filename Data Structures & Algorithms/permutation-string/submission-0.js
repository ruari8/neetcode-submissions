class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map = new Map()
        for(let i=0; i<s1.length; i++) {
            if(map.has(s1[i])) map.set(s1[i], map.get(s1[i])+1)
            else map.set(s1[i], 1)
        }

        let map2 = new Map()
        let left = 0
        for(let right=0; right<s2.length; right++) {
            // update map
            if(!map.has(s2[right])) {
                map2 = new Map()
                left = right+1
            } else {
                map2.set(s2[right], (map2.get(s2[right]) || 0) + 1)

                // shrink if window too big
                if(right - left + 1 > s1.length) {
                    map2.set(s2[left], map2.get(s2[left]) - 1)
                    left++
                }

                //check if map matches
                if(right - left + 1 == s1.length) {
                    let match = true
                    for(let [char, count] of map) {
                        if(map2.get(char) !== count) {
                            match = false
                            break
                        }
                    }
                    if(match) return true
                    else {
                        map2.set(s2[left], map2.get(s2[left])-1)
                        left++
                    }
                }
            }
        }
        return false
    }
            
}
