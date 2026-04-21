class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let largestArea = 0
        let stack = []
        for(let i=0; i<heights.length; i++) {
            while(stack.length > 0 && heights[i] < heights[stack[stack.length-1]]) {
                let pop = stack.pop()
                let rightSmallerIndex = i
                let leftSmallerIndex = stack.length ? stack[stack.length - 1] : -1
                let width = rightSmallerIndex-leftSmallerIndex-1
                let height = heights[pop]
                let area = width*height
                if(area > largestArea) largestArea = area
            }
            stack.push(i)
        }
        while(stack.length > 0) {
            let pop = stack.pop()
            let rightSmallerIndex = heights.length
            let leftSmallerIndex = stack.length ? stack[stack.length - 1] : -1
            let width = rightSmallerIndex-leftSmallerIndex-1
            let height = heights[pop]
            let area = width*height
            if(area > largestArea) largestArea = area
        }
        return largestArea
    }
}
