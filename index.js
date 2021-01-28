var express = require('express');
var router = express.router();

/* get home page */
router.get('/',(req,res,next) =>{
  res.render('index', {title: 'MNiST Study Tool'});
});

module.exports = router;
