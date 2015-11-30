var express = require('express');
var app = express();

var entries = {
  1: {
    firstName: "Babak",
    lastName: "Khosravifar",
    emails: [
      {type: "home", address: "Babak.Khosravifar@gmail.com"},
      {type: "work", address: "Babak.Khosravifar@Mentorina.com"}
    ]
  },
  2: {
    firstName: "Ali",
    lastName: "Hatamni",
    emails: [
      {type: "home", address: "Ali.Hatamni@gmail.com"},
      {type: "work", address: "Ali.Hatamni@mcgill.ca"}
    ]
  },
  3: {
    firstName: "Fred",
    lastName: "Smith",
    emails: [
      {type: "home", address: "Fred.Smith@gmail.com"},
      {type: "work", address: "Fred.Smith@live.ca"}
    ]
  },
  4: {
    firstName: "Ali",
    lastName: "Ashoori",
    emails: [
      {type: "home", address: "Ali.Ashoori@gmail.com"},
      {type: "work", address: "Ali.Ashoori@bell.ca"}
    ]
  }  
};




app.get('/entry/:entryId', function (req, res) {
  
  var entryId = req.params.entryId;
  
  if(entryId<5){
    res.json(entries[entryId]);
  } else {
    res.status(400).send('Bad request: The entryId is not available.')
  }
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
