class Tweet {
    data() {
        return {
            pagination: {
                data: "tweets",
                size: 1,
                alias: "tweet"
            },
            permalink: data => `realDonaldTrump/status/${data.tweet.id}/embed.html`
        }
    }

    render(data) {
        return `<html lang="en">
            <head>
                <title>Tweet / Trump Twitter Archive</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
            </head>
            <body>
                <figure>
                    <blockquote cite="https://twitter.com/realDonaldTrump/status/${data.tweet.id}">
                        <p>${data.tweet.text}</p>
                    </blockquote>
                    <figcaption>
                        <b>— @realDonaldTrump</b> (Archived at <cite><a href="https://trumptwitter.org">trumptwitter.org</a><cite>)
                        <br><br>
                        <b>Date:</b> ${data.tweet.date}
                        <br>
                        <b>Favorites:</b> ${data.tweet.favorites}
                        <br>
                        <b>Retweets:</b> ${data.tweet.retweets}
                    </figcaption>
                </figure>
            </body>
        </html>`
    }
}

module.exports = Tweet;