class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map() // key: [val, timestamp]
        this.capacity = capacity
        this.timestamp = 0
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1
        this.cache.set(key, [this.cache.get(key)[0], this.timestamp])
        this.timestamp++
        return this.cache.get(key)[0]
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.cache.set(key, [value, this.timestamp])
        this.timestamp++
        if(this.cache.size > this.capacity) {
            let minKey = [...this.cache.entries()].reduce((a, b) => b[1][1] < a[1][1] ? b : a)[0];
            this.cache.delete(minKey);
        }
    }
}