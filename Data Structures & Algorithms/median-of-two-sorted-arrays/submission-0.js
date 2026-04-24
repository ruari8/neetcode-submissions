class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let length1 = nums1.length
        let length2 = nums2.length
        let left = 0
        let right = length1<length2 ? length1 : length2
        let half = Math.floor((length1+length2+1)/2)

        if (length2<length1) {
            let temp = nums2
            nums2 = nums1
            nums1 = temp
        }

        while(left<=right) {
            //partions 
            let i = Math.floor((left+right)/2)
            let j=half-i
            //values
            let leftMax1 = i > 0 ? nums1[i-1] : -Infinity
            let rightMin1 = i < nums1.length ? nums1[i] : Infinity
            let leftMax2 = j > 0 ? nums2[j-1] : -Infinity
            let rightMin2 = j < nums2.length ? nums2[j] : Infinity
            //check valid
            let check = (leftMax1 <= rightMin2)
            let check2 = (rightMin1 >= leftMax2)
            //validate
            if(check && check2) {
                //odd
                if((length1+length2)%2 == 1) return Math.max(leftMax1, leftMax2)
                //even
                else return (Math.max(leftMax1, leftMax2) + Math.min(rightMin1, rightMin2))/2
            } else if(!check) {
                right = i-1
            } else if(!check2) {
                left = i+1
            }
        }
    }
}
