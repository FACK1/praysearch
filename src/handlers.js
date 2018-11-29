const path = require('path')
const fs = require('fs')
const timeOfPray = require('./praysearch.js')
// ------------------------------------------------
const homeHandler = (request, response) => {
  const htmlPath = path.join(__dirname, '../client/index.html')
  fs.readFile(htmlPath, (error, html) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' })
      response.end('<h1> Server error! sorry</h1>')
    }
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(html)
  })
}
// ------------------------------------------------
const clientHandler = (request, response) => {
  const filePath = path.join(__dirname, '..', request.url)
  const extension = request.url.split('.')[1]
  const contentTypeMapping = {
    'js': 'application/js',
    'css': 'text/css',
    'html': 'text/html'
  }
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHeader(500, { 'content-Type': 'text/html' })
      response.end('<h1> Server error! sorry</h1>')
    }
    response.writeHead(200, { 'content-Type': contentTypeMapping[extension] })
    response.end(file)
  })
}
// ------------------------------------------------
var SPTHandler = (request, response) => {
  timeOfPray(request, response)
}
// ------------------------------------------------
var pageNotFoundHandler = (request, response) => {
  response.writeHead(404, { 'content-Type': 'text/html' })
  response.end('<h1>Page Not Found</h1>')
}

module.exports = {
  homeHandler,
  clientHandler,
  SPTHandler,
  pageNotFoundHandler
}
