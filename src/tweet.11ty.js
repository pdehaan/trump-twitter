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
                    <b>— @realDonaldTrump</b> 
                    <br><br>
                    <b>Date:</b> ${data.tweet.date}
                    <br>
                    <b>Favorites:</b> ${data.tweet.favorites}
                    <br>
                    <b>Retweets:</b> ${data.tweet.retweets}
                    <details>
                        <summary>Additional Metadata</summary>
                        <span><b>ID:</b> ${data.tweet.id}</span>
                        <span><b>Device:</b> ${data.tweet.device}</span>
                        <span><b>Retweet:</b> ${data.tweet.isRetweet === "f" ? "False" : "True"}</span>
                        <span><b>Deleted:</b> ${data.tweet.isDeleted === "f" ? "False" : "True"}</span>
                        <span><b>Flagged:</b> ${data.tweet.isFlagged === "f" ? "False" : "True"}</span>
                    </details>
                    <details>
                        <summary>Cite this Tweet</summary>
                        <b>APA:</b> Trump, D. J. [@realDonaldTrump]. (2020, September 28). ${data.tweet.text} [Tweet]. Twitter. https://twitter.com/realDonaldTrump/status/${data.tweet.id}
                        <hr>
                        <b>MLA:</b> Trump, Donald J. (@realDonaldTrump). “${data.tweet.text}” Date posted, Time Posted. Tweet.
                    </details>
                    <details>
                        <summary>Embed this Tweet</summary>
                        <div style="display: flex; justify-content: space-between;">
                            <input id="iframeText" type="text" style="width: 75%" value="<iframe src='https://trumptwitter.org/realDonaldTrump/status/${data.tweet.id}/embed'></iframe>"></input>
                            <button id="copyIframeText">Copy</button>
                        <div>
                    </details>
                </figcaption>
            </figure>
            <script>
                function copy() {
                    var copyText = document.querySelector("#iframeText");
                    copyText.select();
                    document.execCommand("copy");
                }
                document.querySelector("#copyIframeText").addEventListener("click", copy);
            </script>
        </section>`
    }
}

module.exports = Tweet;