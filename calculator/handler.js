const requestHandlers = (req, res) => {
  console.log(req.url, req.method)
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html")
    res.write(`

    <html>
        <head>
            <title>
                Job For ITI
            </title>
        </head>
        <body>
                <h1>
                    Welcome To Calculator
                </h1>
                <a href = "/calculator">
                    Go To Calculator
                </a>
        </body>
    </html>
        
    `)
    return res.end()
  }
}

exports.requestHandlers = requestHandlers
