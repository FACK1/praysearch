// -----Import Modules-----------------------------------------------------------

var handlers = require('./handlers.js')

// ------Create Router-----------------------------------------------------------
var router = (request, response) => {
// ----Home Endpoint-------------------------------------------------------------
  if (request.url === '/') {
    handlers.homeHandler(request, response)
  }
  // -----Client Side Endpoint-------------------------------------------------
  else if (request.url.includes('/client/')) {
    handlers.clientHandler(request, response)
  }
  // -----Search Endpoint-----------------------------------------------------
  else if (request.url.includes('/searchPraytimes')) {
    handlers.SPTHandler(request, response)
  }
  // -----Error Endpoint-------------------------------------------------------
  else {
    handlers.pageNotFoundHandler(request, response)
  }
}
module.exports = router
