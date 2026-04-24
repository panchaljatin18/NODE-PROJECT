const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    if (req.url === "/home") {
        res.write("<h1>Welcome to Home</h1>")
        return res.end()
    } else if (req.url === "/men") {
        res.write("<h1>Welcome to Men</h1>")
        return res.end()
    } else if (req.url === "/women") {
        res.write("<h1>Welcome to Women</h1>")
        return res.end()
    } else if (req.url === "/kids") {
        res.write("<h1>Welcome to Kids</h1>")
        return res.end()
    } else if (req.url === "/cart") {
        res.write("<h1>Welcome to Cart</h1>")
        return res.end()
    }
    res.write(`
    <html>
        <head>
            <title>Myntra</title>
        </head>
    <body>
        <header>
            <nav>
                    <ul>
                <li>
                    <a Home href="/home">
                        Home
                    </a>
                </li>
                <li>
                    <a Home href="/men">
                        Men
                    </a>
                </li>
                <li>
                    <a Home href="/women">
                        Women
                    </a>
                </li>
                <li>
                    <a Home href="/kids">
                        Kids
                    </a>
                </li>
                <li>
                    <a Home href="/cart">
                        Cart
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</body>
    </html>,
      `);
    res.end()
});

const PORT = 3000

server.listen(3000, () => {
  console.log(`Server running on address https://localhost:${PORT}`)
})
