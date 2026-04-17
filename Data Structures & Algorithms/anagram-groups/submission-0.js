class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let i=0; i<strs.length; i++){
            let sortedWord = strs[i].split('').sort().join('')
            if(map.has(sortedWord)) {
                map.get(sortedWord).push(strs[i])
            } else {
                map.set(sortedWord, [strs[i]])
            }
        }
        return [...map.values()]

        // let allMaps = new Map()
        // for(let i=0; i<strs.length; i++) {
        //     let map = new Map()
        //     for(let j=0; j<strs[i].length; j++) {
        //         if(map.has(strs[i][j])) map.set(strs[i][j], map.get(strs[i][j]) + 1)
        //         else map.set(strs[i][j], 1)
        //     }
        //     allMaps.set(i, map)
        // }
        
    }
}
