class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let highestCount=0
        for (let num of set) {
            let current = num
            let count = 0
            if(!set.has(num-1)) {
                while(set.has(current)) {
                    count++
                    current++
                }
                if(count > highestCount) highestCount = count
            }
        }
        return highestCount

        // let sortedNums = nums.sort((a, b) => a-b);
        // let count = []
        // let activeScore = 0
        // for(let i=1; i<sortedNums.length; i++) {
        //     if(sortedNums[i-1] + 1 == sortedNums[i]) {
        //         activeScore++;
        //     } else {
        //         count.push(activeScore)
        //         activeScore = 0
        //     }
        // }
        // return Math.max(...count)
    }
}
