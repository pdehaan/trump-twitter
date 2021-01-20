class Tweet {
    data() {
        return {
            pagination: {
                data: "short",
                size: 1,
                alias: "tweet"
            },
            permalink: data => `realDonaldTrump/status/${data.tweet.id}/data.json`
        }
    }

    render(data) {
        return `${JSON.stringify(data.tweet)}`
    }
}

module.exports = Tweet;