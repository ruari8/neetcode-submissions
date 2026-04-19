class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let numsSorted = nums.sort((a, b) => a - b);
        let output = []
        for(let i=0; i<numsSorted.length; i++) {
            if (i > 0 && numsSorted[i] === numsSorted[i - 1]) continue
            let left = i+1
            let right = numsSorted.length-1
            while(left<right) {
                if(numsSorted[i] + numsSorted[left] + numsSorted[right] < 0) left++
                else if(numsSorted[i] + numsSorted[left] + numsSorted[right] > 0) right--
                else if(numsSorted[i] + numsSorted[left] + numsSorted[right] == 0) {
                    output.push([numsSorted[i], numsSorted[left], numsSorted[right]])
                    left++
                    right--
                    while (left < right && numsSorted[left] === numsSorted[left - 1]) left++
                    while (left < right && numsSorted[right] === numsSorted[right + 1]) right--
                }
            }
        }
        return output
        

        // let output = []
        // for(let i=0; i<nums.length; i++) {
        //     let array=[nums[i]]
        //     let arrayVal = nums[i]
        //     for(let j=i+1; j<nums.length; j++) {
        //         if(array.length == 3) {
        //             arrayVal-=array[2]
        //             array.pop()
        //         }
        //         arrayVal+=nums[j]
        //         array.push(nums[j])
        //         if(arrayVal == 0 && array.length == 3) output.push(array)
        //     }
        // }
    }
}
