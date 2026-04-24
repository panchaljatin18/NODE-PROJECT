const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Enter Your Details</h1>'); 
        res.write('<form action="submit-details" method="POST" >')
        res.write('<input type="text" placeholder="Enter Your name"/><br><br>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male"/>')
        res.write('<label for="female">female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female"/>')
        res.write('<br><input type="submit" value="Submit"/>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
        fs.writeFileSync('user.txt', 'Jatin Panchal');
        res.statusCode = 302;
        res.setHeader('Location', '/');
    }
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Checkout our products</h1></body>');
        res.write('</html>');
        return res.end();
    
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server Connect on address http://localhost:${PORT}`);

})