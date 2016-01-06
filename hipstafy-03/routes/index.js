var express = require('express');
var router = express.Router();
//defining modules
var hipstafyIt = require('../src/hipstafy.js');
var results;


//added during lecture
// var phrases = require('..bin/snippets');
// console.log(phrases);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hipstafy', subtitle: "Hipsta-liciously"});
  // console.log('*******');
  // console.log(req.params);
});

//marthas lecture

//forms adding input post will send user input
//req is an huge object req.query, req.params, req.body
// Sent via POST requrest req.body receives userInput
// ? is query not params
//routes should just be traffic handlers
//copy object into module.exports
//object in snipets.js var phrases =[]
// make show.ejs file

// when you redirect you cannot use your local object


//app.js is the traffic controller

router.post('/', function(req, res, next){
  // var userInput = "Hello " + req.body.sentence;
  // console.log(req.body.sentence); //before function
  results = hipstafyIt(req.body.sentence);
  // console.log('-------------')
  // console.log(results);
  //after function
  res.render("show", { userResults: results } );
  //render this template
})

// router.get('/show', function(req, res, next) {
//   res.render('show', { results: results});
//   // console.log('*******');
//   // console.log(req.params);
// });

module.exports = router;
