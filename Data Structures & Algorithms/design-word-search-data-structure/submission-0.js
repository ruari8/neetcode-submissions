class WordDictionary {
    constructor() {
        this.children = {}
        this.isEnd = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this  // start at root
        for(let i = 0; i < word.length; i++) {
            let char = word[i]
            if(!curr.children[char]) {
                curr.children[char] = new WordDictionary()
            }
            curr = curr.children[char]
        }
        curr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(this, word, 0)
    }

    dfs(node, word, index) {
        if(index == word.length) return node.isEnd
        let curr = node
        let char = word[index]
        if(char == '.') {
            for(let child of Object.values(curr.children)) {
                if(this.dfs(child, word, index+1)) return true
            }
            return false
        } else {
            if(!curr.children[char]) return false
            return this.dfs(curr.children[char], word, index+1)
        }
    }
}
