var express = require('express');
var app = express();
var url = require('url');



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



app.get('/entry/search', function (req, res) {

  var firstName = req.query.firstName.toUpperCase();
  var lastName = req.query.lastName.toUpperCase();
  var keysInEntries = Object.keys(entries);
  var resultsFound = [];
  var found = false;

  for(var i = 1 ; i <= keysInEntries.length ; i++){
    if(firstName === entries[i].firstName.toUpperCase() || lastName === entries[i].lastName.toUpperCase())
      resultsFound.push(entries[i]);
  }
  
  if(!resultsFound){
    res.send("Error: No entry found.");
  } else {
    res.json(resultsFound);
  }
});



/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
