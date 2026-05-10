class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        //frequency map
        let map = new Map()
        for(let i = 0; i<tasks.length; i++) {
            if(map.has(tasks[i])) map.set(tasks[i], map.get(tasks[i])+1)
            else map.set(tasks[i], 1)
        }
        let maxCount = Math.max(...map.values())
        let lastFrameCount = [...map.values()].filter(v => v === maxCount).length
        return Math.max(tasks.length, (maxCount-1) * (n+1) + lastFrameCount)
    }
}
