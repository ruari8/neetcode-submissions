class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let brackets = new Map()
        brackets.set(')', '(')
        brackets.set('}', '{')
        brackets.set(']', '[')

        for(let i=0; i<s.length; i++) {
            if (!brackets.has(s[i])) stack.push(s[i]) // if not close brackets
            if (brackets.has(s[i])) { // if close brackets
                let topStack = stack.pop()
                if(brackets.get(s[i]) != topStack) return false
            }
        }
        if(stack.length == 0) return true
        else return false
    }
}
