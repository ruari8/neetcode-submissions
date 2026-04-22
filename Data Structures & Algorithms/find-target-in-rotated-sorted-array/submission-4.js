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
        let mid = Math.floor((left+right)/2)
        while(left<=right) {
            if (target == nums[mid]) {
                index = mid
                break
            } else if(nums[left]<=nums[mid]){
                if(target>=nums[left] && target<nums[mid]) {
                    right = mid-1
                    mid = Math.floor((left+right)/2)
                } else {
                    left = mid+1
                    mid = Math.floor((left+right)/2)
                }
            } else if(nums[right]>=nums[mid]){
                if(target<=nums[right] && target>nums[mid]) {
                    left = mid+1
                    mid = Math.floor((left+right)/2)
                } else {
                    right = mid-1
                    mid = Math.floor((left+right)/2)
                }
            }
        }
        return index
    }
}

