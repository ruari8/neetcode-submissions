class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let water = 0
        let left = 0
        let right = height.length-1
        let leftMax = 0
        let rightMax = 0
        while(left<right) {
            leftMax = Math.max(height[left], leftMax)
            rightMax = Math.max(height[right], rightMax)
            if(height[left]<height[right]) {
                water += leftMax - height[left]
                left++
            } else {
                water += rightMax - height[right]
                right--
            }
        }
        return water
    }
}
