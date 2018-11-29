/*eslint no-console: "error"*/

var http = require('http')
var router = require('./router.js')
var PORT = 1440
var server = http.createServer(router)

server.listen(PORT, function () {
	// eslint-disable-next-line no-console
	console.log('server is up and running on port 1440!')
})
