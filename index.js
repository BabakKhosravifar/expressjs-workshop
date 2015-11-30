var express = require('express');
var app = express();

app.get('/:firstName', function (req, res) {
  var firstName = req.params.firstName;
  res.send('<font color="red" face="verdana" size=5>Hello '+firstName+'!</font>');
});


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
