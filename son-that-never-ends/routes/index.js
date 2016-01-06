var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Verse 1', header1: '/', header2:' | ', header3: 'https://www.youtube.com/watch?v=HNTxr2NJHa0',
  lyric: 'This is the song that doesn\'t end', pic: 'https://s-media-cache-ak0.pinimg.com/236x/27/f3/8d/27f38d1bb63ee2566529721d62b972aa.jpg',
  next: '/verse-2'})
});

router.get('/verse-2', function(req, res) {
  res.render('index', {title: 'Verse 2', header1: '/', header2:' | ', header3: 'https://www.youtube.com/watch?v=HNTxr2NJHa0',
  lyric: 'It just goes on and on my friends', pic: 'http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg',
  next: '/verse-3'})
})

router.get('/verse-3', function(req, res) {
  res.render('index', {title: 'Verse 3', header1: '/', header2:' | ', header3: 'https://www.youtube.com/watch?v=HNTxr2NJHa0',
  lyric: 'Some people, started singing it not knowing what it was', pic: 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg',
  next: '/verse-4'})
})

router.get('/verse-4', function(req, res) {
  res.render('index', {title: 'Verse 4', header1: '/', header2:' | ', header3: 'https://www.youtube.com/watch?v=HNTxr2NJHa0',
  lyric: 'And they\'ll continue singing it forever just because...', pic: 'http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg',
  next: '/'})
})

module.exports = router;
