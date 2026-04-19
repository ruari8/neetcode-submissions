class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        let left = 0
        let right = heights.length-1
        while(left<right) {
            let area = (right-left)*Math.min(heights[left], heights[right])
            if(area > maxArea) maxArea = area
            if(heights[left] < heights[right]) left++
            else right--
        }
        
        return maxArea

        // let maxArea = 0
        // for(let i=0; i<heights.length; i++) {
        //     let width = i+1
        //     while(width<heights.length) {
        //         let height = Math.min(heights[i], heights[width])
        //         console.log((width-i)*height)
        //         if((width-i)*height > maxArea) maxArea = (width-i)*height
        //         width++
        //     }
        // }
        // return maxArea
    }
}
