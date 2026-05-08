class PrefixTree {
    constructor() {
        this.children = {}
        this.isEnd = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this
        for(let i=0; i<word.length; i++) {
            let char = word[i]
            if(!curr.children[char]) {
                curr.children[char] = new PrefixTree()
            }
            curr = curr.children[char]
        }
        curr.isEnd=true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this
        for(let i=0; i<word.length; i++) {
            let char = word[i]
            if(!curr.children[char]) return false
            curr = curr.children[char]
        }
        return curr.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this
        for(let i=0; i<prefix.length; i++) {
            let char = prefix[i]
            if(!curr.children[char]) return false
            curr = curr.children[char]
        }
        return true
    }
}
