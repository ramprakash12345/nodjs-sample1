var express = require('express');
var router = express.Router();

router.get('/mobileDetails', function(req,res,next){
    res.render('mobileDetails', {mobileData: {name:'vivo Y72g', model:2021,} })
});

module.exports = router;