var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.send('Hello ' + eval(req.query.q));
   console.log(eval(req.query.q));
});

app.listen(9003, function () {
  console.log('Example app listening on port 8080!');
});
