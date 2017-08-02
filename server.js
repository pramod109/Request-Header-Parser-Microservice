//Request-Header-Parser-Microservice
// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  let parsedata = parser(req)
  res.status(200).send(parsedata)
});

//function to handle parsing
function parser(req){

  //handle ip address
  var ip1 = req.connection.remoteAddress
  var ip2 = ip1.substr(7,20)
  
  //handle useragent
  var agent1 = req.headers["user-agent"]
  var agent2 = agent1.split(" ")
  
  //handle language
  var lan1 = req.headers["accept-language"]
  var lan2 = lan1.substr(0,5)
  
  
  return {
    ipaddress : ip2,
    useragent : agent2[1],
    language : lan2
  }
}



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
