class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = []
        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]])
        }
        let sortedCars = cars.sort((a, b) => b[0] - a[0])
        let finishLine = [(target-sortedCars[0][0])/sortedCars[0][1]]
        for(let i=1; i<position.length; i++) {
            let time = (target-sortedCars[i][0])/sortedCars[i][1]
            if(time > finishLine[finishLine.length-1]) {
                finishLine.push(time)
            }
        }
        return finishLine.length
    }
}
