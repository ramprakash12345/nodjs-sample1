var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/findRouter', function(req, res, next) {
    const conn = require('../mongoconn');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student1');
        const findResult = await collection.find({}).toArray();
        res.render('findRouter', { student1: findResult});
    }).catch((e) => {
        console.log(e);
    })

});

module.exports = router;