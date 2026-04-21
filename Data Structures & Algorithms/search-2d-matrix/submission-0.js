class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        //check rows
        let row = 0
        let top = 0
        let bottom = matrix.length-1
        let middle = Math.floor((top + bottom) / 2)
        while(top <= bottom) {
            if(matrix[middle][0] <= target && target <= matrix[middle][matrix[middle].length-1]) {
                row = middle
                break;
            } else if (target<matrix[middle][0]) {
                bottom = middle-1
                middle = Math.floor((top + bottom) / 2)
            } else if (target>matrix[middle][matrix[middle].length-1]) {
                top = middle+1
                middle = Math.floor((top + bottom) / 2)
            }
        }

        //check columns
        let found = false
        let left = 0
        let right = matrix[row].length-1
        let mid = Math.floor((left + right) / 2)
        while(left <= right) {
            if(target<matrix[row][mid]) {
                right = mid-1
                mid = Math.floor((left + right) / 2)
            } else if (target>matrix[row][mid]) {
                left = mid+1
                mid = Math.floor((left + right) / 2)
            } else if (target == matrix[row][mid]) {
                found = true
                break;
            } else {
                found = false
                break;
            }
        }
        return found
    }
}
