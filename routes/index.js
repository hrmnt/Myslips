var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Keynote' });
});
router.get('/lesson/html', function(req, res, next) {
    res.render('lesson', { title: 'Keynote' });
});


module.exports = router;
