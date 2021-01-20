class Base {
    render(data) {
        return `<!DOCTYPE html>
        <html>
            <head>
                <title>Trump Twitter Archive</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
            </head>
            <body>
                <header>
                    <nav>
                        <h1>Trump Twitter Archive</h1>
                        <a href="#">About</a></li>
                        <a href="#">Search</a>
                    </nav>
                </header>
                <main>
                    ${data.content}
                </main>
            </body>
        </html>`
    }
}

module.exports = Base;