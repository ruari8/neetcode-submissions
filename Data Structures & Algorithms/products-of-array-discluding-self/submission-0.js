class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [1] //lhs 1,2,4,6 => 1, (1*1=1), (1*2=2), (2*4=8)
        // rhs => (24*2=48),(6*4=24),(1*6=6),1
        //48,24,12,8
        for(let i=1; i<nums.length; i++) {
            output[i]=output[i-1]*nums[i-1]
        }
        let right = 1
        for(let i=nums.length-1; i>=0; i--) {
            output[i] = output[i] * right
            right = right * nums[i]
        }
        return output

        // let output = []
        // for(let i=0; i<nums.length; i++) {
        //     let lhs = nums.slice(0, i)
        //     let rhs = nums.slice(i+1, nums.length)
        //     let lhsVal = lhs.reduce((acc, x) => acc * x, 1)
        //     let rhsVal = rhs.reduce((acc, x) => acc * x, 1)
        //     output[i] = lhsVal*rhsVal
        // }
        // return output
    }
}
