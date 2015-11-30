var express = require('express');
var app = express();


app.get('/op/:operation/:number1/:number2', function (req, res) {
  
  var operation = req.params.operation;
  var number1 = Number(req.params.number1);
  var number2 = Number(req.params.number2);
  var solution;
  var op;
  switch(operation){
    
    case "add":
      solution = number1+number2;
      op = "+";
      break;
    case "sub":
      solution = number1-number2;
      op = "-";
      break;
    case "mult":
      solution = number1*number2;
      op = "*";
      break;
    case "div":
      
      if(number2!==0) solution = number1/number2;
      else solution = null;
      op = "/";
      break;
    default:
        res.status(400).send("Bad request: the operator not found among add/sub/mult/div. ");
        break;
  }
  
  var calculation = { 
    text: "Here is your requested calculation: "+number1 +' '+ op + ' '+number2+ ' = '+solution+'.'
      
  };
  
  return res.json(calculation.text);
});



/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
