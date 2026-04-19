class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length-1
        while(left<right) {
            if(numbers[left] + numbers[right] < target) left++;
            if(numbers[left] + numbers[right] > target) right--;
            if(numbers[left] + numbers[right] == target) return [left+1, right+1];
        }
        // let map = new Map()
        // for(let i=0; i<numbers.length; i++) {
        //     map.set(numbers[i], i)
        // }
        // for(let i=0; i<numbers.length; i++) {
        //     if(map.get(target - numbers[i]) != i)
        //     if(map.has(target - numbers[i])) return [map.get(numbers[i])+1, map.get(target-numbers[i])+1]
        // }

    }
}
