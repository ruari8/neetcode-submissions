class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = ""
        for(let i=0; i<strs.length; i++) {
            string += strs[i].length + "#" + strs[i]
        }
        return string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0
        let strs=[]
        while(true) {
            let hashIndex = str.indexOf("#", i)
            if(hashIndex == -1) break;
            let wordLength = Number(str.slice(i, hashIndex))
            let wordStart = hashIndex+1
            strs.push(str.slice(wordStart, wordStart+wordLength))
            i = wordStart+wordLength
        }
        return strs

        // let strs = []
        // let isWord = false
        // let number = ""
        // let word = ""
        // for(let i=0; i<str.length; i++) {
        //     if(isWord) {
        //         word += str[i]
        //         if(word.length == Number(number)) {
        //             isWord = false
        //             number = ""
        //             strs.push(word)
        //             word = ""
        //         }
        //     } 
        //     if(!isWord && str[i] != "#") number += str[i]
        //     if(str[i] == "#" && number != "") isWord = true
        // }
        // return strs
    }
}
