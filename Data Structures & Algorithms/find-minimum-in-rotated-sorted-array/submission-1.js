class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length-1
        let mid = Math.floor((left+right)/2)
        while(left<right) {
            if(nums[mid]>nums[right]){
                left = mid+1
                mid = Math.floor((left+right)/2)
            } else if (nums[mid]<nums[right]) {
                right = mid
                mid = Math.floor((left+right)/2)
            } 
        }
        return nums[left]
        //return Math.min(...nums)
    }
}
