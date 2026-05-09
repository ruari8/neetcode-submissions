class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        points.sort((a, b) => {
            let distA = Math.sqrt((a[0]-0)**2 + (a[1]-0)**2)
            let distB = Math.sqrt(b[0]**2 + b[1]**2)
            return distA - distB
        })
        return points.slice(0, k)
    }
}
