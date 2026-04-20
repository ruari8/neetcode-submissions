class MinStack {
    constructor() {
        this.items = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val)
        if(this.min.length == 0 || val < this.min[this.min.length-1]) {
            this.min.push(val)
        }
        else this.min.push(this.min[this.min.length-1])
    }

    /**
     * @return {void}
     */
    pop() {
        this.items.pop()
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length-1]
    }
}
