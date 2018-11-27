//-----Import Modules-----------------------------------------------------------
const fs = require('fs')
const path = require('path');
const handlers = require('./handlers.js');

//------Create Router-----------------------------------------------------------
const router = (request, response)=> {

//----Home Endpoint-------------------------------------------------------------
      if (request.url === '/') {
            handlers.homeHandler(request,response)
      }
    //-----Client Side Endpoint-------------------------------------------------
    else if (request.url.includes('/client/')) {
            handlers.clientHandler(request,response)
    }
    //-----Search Endpoint-----------------------------------------------------
    else if (request.url.includes('/searchPraytimes/')) {
            handlers.SPTHandler(request,response)
    }
    //-----Error Endpoint-------------------------------------------------------
    else {
            handlers.pageNotFoundHandler(request,response)
    }

    }
  module.exports = router
