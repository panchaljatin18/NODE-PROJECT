const sumRequestHandler = (req, res) => {
    console.log("In Sum Request Handler", req.url);

    const body = [];

    req.on('data', chunk => body.push(chunk));

    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();

        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);

        const first = Number(bodyObj.first);
        const second = Number(bodyObj.second);

        // validation
        if (isNaN(first) || isNaN(second)) {
            res.setHeader('Content-Type', 'text/html');
            res.write(`<h1>Invalid Input</h1><a href="/calculator">Go Back</a>`);
            return res.end();
        }

        const result = first + second;

        console.log("Result:", result);

        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>Result</title></head>
                <body>
                    <h1>Result: ${result}</h1>
                    <a href="/calculator">Back to Calculator</a>
                </body>
            </html>
        `);
        res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;