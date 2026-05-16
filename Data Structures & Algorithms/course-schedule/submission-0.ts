class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        let preMap: Map<number, number[]> = new Map()
        for(let i = 0; i < numCourses; i++) preMap.set(i, [])
        for(let [a, b] of prerequisites) preMap.get(a)!.push(b)
        
        let visiting = new Set<number>()
        
        // check every course
        for(let i = 0; i < numCourses; i++) {
            if(!this.dfs(i, preMap, visiting)) return false
        }
        return true
    }

    dfs(course: number, preMap: Map<number, number[]>, visiting: Set<number>): boolean {
        if(visiting.has(course)) return false
        if(preMap.get(course).length == 0) return true

        visiting.add(course)
        for(let pre of preMap.get(course)!) {
            if(!this.dfs(pre, preMap, visiting)) return false
        }
        visiting.delete(course)
        preMap.set(course, [])
        return true

    }
}
