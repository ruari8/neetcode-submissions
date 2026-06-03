class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = [n]
        while(n != 1) {
            let num = String(n)
            let newNum = 0
            for(let i=0; i<num.length; i++) {
                newNum += Number(num[i])**2
            }
            if(seen.includes(newNum)) return false
            else {
                seen.push(newNum)
                n = newNum
            }
        }
        return true
    }
}
