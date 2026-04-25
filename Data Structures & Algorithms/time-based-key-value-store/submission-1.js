class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)) {
            this.keyStore.set(key, [...this.keyStore.get(key), [value, timestamp]])
        } else {
            this.keyStore.set(key, [[value, timestamp]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let returnVal = ""
        let left = 0
        let valTime = this.keyStore.get(key)
        if(!valTime) return returnVal
        let right = valTime.length-1
        let middle = Math.floor((left+right)/2)
    
        while(left<=right) {
            if(valTime[middle][1] == timestamp) {
                returnVal = valTime[middle][0]
                break
            } else if(valTime[middle][1] > timestamp) {
                right = middle-1
                middle = Math.floor((left+right)/2)
            } else if(valTime[middle][1] < timestamp) {
                returnVal = valTime[middle][0]
                left = middle+1
                middle = Math.floor((left+right)/2)
            }
        }
        return returnVal
    }
}
