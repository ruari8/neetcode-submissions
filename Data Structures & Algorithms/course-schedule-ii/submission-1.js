class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let map = new Map()
        for(let i=0; i<numCourses; i++) {
            map.set(i, [])
        }
        for(let [a,b] of prerequisites) {
            map.get(a).push(b)
        }
        let result = []
        let visiting = new Set()
        for(let i=0; i<numCourses; i++ ) {
            if(!this.dfs(i, map, visiting, result)) return []
        }
        return result
    }

    dfs(course, map, visiting, result) {
        if(visiting.has(course)) return false
        if(map.get(course) == null) return true
        if(map.get(course).length == 0) {
            result.push(course)
            map.set(course, null)
            return true
        }
        visiting.add(course) 
        for(let c of map.get(course)) {
            if(!this.dfs(c, map, visiting, result)) return false
        }
        visiting.delete(course)
        map.set(course, null)
        result.push(course)
        return true
    }
}
