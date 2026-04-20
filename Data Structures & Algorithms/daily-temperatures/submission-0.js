class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let temp = [0]
        let result = new Array(temperatures.length).fill(0);

        for(let i=1; i<temperatures.length; i++) {
            while(temperatures[i] > temperatures[temp[temp.length-1]] && temp.length > 0) {
                let poppedIndex = temp.pop()
                result[poppedIndex] = i-poppedIndex
            }
            temp.push(i)
        }
        return result
    }
}
