var express = require('express'),
  app = express();

// WHEN a user visits the homepage (like http://localhost:3000)
app.get("/", function (req, res) {
  // THEN send back the response: 'Hello World'
  res.send("Hello World");
});


app.get('/add/:first/:second', function(req, res){
  var add = +req.params.first + +req.params.second
  res.send('Numbers added = ' + add);
})

app.get('/sub/:first/:second', function(req, res){
  var sub = +req.params.first - +req.params.second
  res.send('Numbers added = ' + sub);
})

app.get('/mult/:first/:second', function(req, res){
  var mult = +req.params.first * +req.params.second
  res.send('Numbers added = ' + mult);
})

app.get('/divi/:first/:second', function(req, res){
  var divi = +req.params.first / +req.params.second
  res.send('Numbers added = ' + divi);
})




// Start the server and make our web app available on http://localhost:3000
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
