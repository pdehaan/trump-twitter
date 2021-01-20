class Tweet {
    data() {
        return {
            layout: "layouts/base",
            pagination: {
                data: "short",
                size: 1,
                alias: "tweet"
            },
            permalink: data => `realDonaldTrump/status/${data.tweet.id}/index.html`
        }
    }

    render(data) {
        return `<hr>
        <section>
            <figure>
                <blockquote cite="https://twitter.com/realDonaldTrump/status/${data.tweet.id}">
                    <p>${data.tweet.text}</p>
                </blockquote>
                <figcaption>
                    <a href="https://twitter.com/realDonaldTrump">@realDonaldTrump</a>
                    <br><br>
                    <b>Date:</b> ${data.tweet.date}
                    <br>
                    <b>Favorites:</b> ${data.tweet.favorites}
                    <br>
                    <b>Retweets:</b> ${data.tweet.retweets}
                    <details>
                        <summary>Additional Metadata</summary>
                        <b>ID:</b> ${data.tweet.id}
                        <b>Device:</b> ${data.tweet.device}
                        <b>Flagged:</b> ${data.tweet.isFlagged === "f" ? "False" : "True"}
                    </details>
                    <details>
                        <summary>Cite this Tweet</summary>
                        <b>APA:</b> Trump, D. J. [@realDonaldTrump]. (2020, September 28). ${data.tweet.text} [Tweet]. Twitter. https://twitter.com/realDonaldTrump/status/${data.tweet.id}
                    </details>
                </figcaption>
            </figure>
        </section>`
    }
}

module.exports = Tweet;