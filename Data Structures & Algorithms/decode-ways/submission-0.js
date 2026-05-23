class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = new Array(s.length+1).fill(0)
        dp[s.length] = 1
        dp[s.length-1] = s[s.length-1]!='0' ? 1:0
        for(let i=s.length-2; i>=0;i--) {
            if(s[i]!=='0') dp[i] += dp[i+1]
            let two = Number(s[i]+s[i+1])
            if(two>=10 && two<=26) dp[i] += dp[i+2]
        }
        return dp[0]
    }
}
