const http = require('http');
const router = require('./router.js');
const PORT = 1440;
const server = http.createServer(router);

server.listen(PORT, function(){
    console.log("server is up and running on port 1440!")
})
