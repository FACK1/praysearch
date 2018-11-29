const request1 = require('request')
const url1 = require('url')
const queryString = require('querystring')
const timepray = (request, response) => {
  const info = url1.parse(request.url).query
  const city = (queryString.parse(info)).city
  const country = (queryString.parse(info)).country
  request1(`http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}`
    , function (error, response1, body) {
      var { data } = JSON.parse(body)
      console.log('data is', data)
      var timeofparys = []
      var dates = []
      var hijridates = []
      // console.log(data[0].timings);
      data.map(function (element) {
        timeofparys.push(element.timings)
        dates.push(element.date.readable)
        hijridates.push(element.date.hijri.date)
      })
      var alldata = []
      alldata[0] = timeofparys
      alldata[1] = dates
      alldata[2] = hijridates

      if (error) {
        response.writeHead(500, { 'content-Type': 'text/html' })
        response.end('<h1> Server error! sorry</h1>')
      }
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(alldata))
    })
}

module.exports = timepray
