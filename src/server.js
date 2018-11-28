const http = require('http');
const router = require('./router.js');
const server = http.createServer(router);

server.listen(process.env.PORT || 1440, function(){
    console.log("server is up and running on port 1440!")
})
