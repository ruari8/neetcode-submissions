class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arithmetic = ["+", "-", "*", "/"]
        let operation = []
        for(let i=0; i<tokens.length; i++) {
            if(!arithmetic.includes(tokens[i])) {
                operation.push(Number(tokens[i]))
            } else {
                let second = operation.pop()
                let first = operation.pop()
                switch(tokens[i]) {
                    case "+":
                        operation.push(first+second)
                        break;
                    case "-":
                        operation.push(first-second)
                        break;
                    case "*":
                        operation.push(first*second)
                        break;
                    case "/":
                        operation.push(Math.trunc(first/second))
                        break;
                    default:
                        break;
                }
            }
        }
        return operation.pop()
    }
}
