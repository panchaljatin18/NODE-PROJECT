const http = require('http');
const { requestHandlers } = require('./handler')

const server = http.createServer(requestHandlers);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server Connect on address http://localhost:${PORT}`);
})