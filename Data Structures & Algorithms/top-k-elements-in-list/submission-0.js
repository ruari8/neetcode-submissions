class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        for(let i=0; i<nums.length; i++) {
            if(map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i])+1)
            } else {
                map.set(nums[i], 1)
            }
        }
        let sortedResults = [...map].sort((a, b) => b[1] - a[1]);
        let topK = sortedResults.slice(0, k)
        let topKNums = topK.map(arr => arr[0])
        return topKNums
    }
}
