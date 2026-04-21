class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let index = -1
        let left = 0
        let right = nums.length-1
        let mid = Math.floor((left + right) / 2)
        while(left <= right) {
            if(target<nums[mid]) {
                right = mid-1
                mid = Math.floor((left + right) / 2)
            } else if (target>nums[mid]) {
                left = mid+1
                mid = Math.floor((left + right) / 2)
            } else if (target == nums[mid]) {
                index=mid
                break
            } 
        }
        return index
        // for(let i=0; i<nums.length; i++) {
        //     if(nums[i] == target) return i
        // }
        // return -1
    }
}
