var express = require('express');
var router = express.Router();

var students = {};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Student Check Ins!',
    students: students
  });
});

router.post('/students', function(req, res, next) {
  var student = req.body.student;
  if (!(student in students)){
    students[student] = 1;
  }
  else {
    students[student]++;
  }
  res.redirect('/');
});

module.exports = router;
