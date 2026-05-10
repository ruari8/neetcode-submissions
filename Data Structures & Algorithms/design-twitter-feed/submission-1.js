class Twitter {
    constructor() {
        this.tweets = {} //userid: [[tweetId, timestamp], ...]
        this.following = {} //userId: [followerId's]
        this.timestamp = 0
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweets[userId]) {
            this.tweets[userId] = []
        }
        this.tweets[userId].push([tweetId, this.timestamp])
        this.timestamp++
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let allTweets = [...(this.tweets[userId] || [])]  // user's own tweets

        if(this.following[userId]) {
            this.following[userId].forEach(followeeId => {
                if(followeeId !== userId) {
                    allTweets = allTweets.concat(this.tweets[followeeId] || [])
                }
            })
        }

        allTweets.sort((a, b) => b[1] - a[1])

        return allTweets.slice(0, 10).map(tweet => tweet[0])
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.following[followerId]) {
            this.following[followerId] = new Set()
        }
        this.following[followerId].add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.following[followerId]) {
            this.following[followerId].delete(followeeId)
        }
    }
}
