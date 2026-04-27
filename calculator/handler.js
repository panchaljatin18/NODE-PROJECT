const { sumRequestHandler } = require('./sum');

const requestHandlers = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head>
                    <title>Job For ITI</title>
                </head>
                <body>
                    <h1>Welcome To Calculator</h1>
                    <a href="/calculator">Go To Calculator</a>
                </body>
            </html>
        `);
        return res.end();
    }

    else if (req.url.toLowerCase() === '/calculator') {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head>
                    <title>Calculator</title>
                </head>
                <body>
                    <h1>Here is the Calculator</h1>
                    <form action="/calculate-result" method="POST">
                        <input type="text" placeholder="First Num" name="first" />
                        <input type="text" placeholder="Second Num" name="second" />
                        <input type="submit" value="Sum">
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    else if (
        req.url.toLowerCase() === '/calculate-result' &&
        req.method === 'POST'
    ) {
        return sumRequestHandler(req, res);
    }

    // 404
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>404 Page Does Not Exist</h1>
                <a href="/">Go To Home</a>
            </body>
        </html>
    `);
    res.end();
};

exports.requestHandlers = requestHandlers;