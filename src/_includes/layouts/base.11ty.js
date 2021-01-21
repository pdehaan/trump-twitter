class Base {
    render(data) {
        return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Trump Twitter Archive</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
                <style>
                    summary {
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <header>
                    <nav>
                        <a href="https://trumptwitter.org" style="text-decoration:none"><h1>Trump Twitter Archive</h1></a>
                    </nav>
                    <p>This website archives the Tweets of former President Donald J. Trump. On January 8th, 2021, the President was <a href="https://web.archive.org/web/20210109031834/https://blog.twitter.com/en_us/topics/company/2020/suspension.html">permanently banned from Twitter.com</a> after inciting an attack on the United States Capitol.</p>
                </header>
                <main>
                    ${data.content}
                </main>
            </body>
        </html>`
    }
}

module.exports = Base;