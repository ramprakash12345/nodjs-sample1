var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/insert', function(req, res, next) {
    const conn = require('../conn');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student1');
        const insertResult = await collection.insertOne(req.body.data);        
        console.log(insertResult);
        res.send({ status: 200, message: 'user inserted successfully', student1: insertResult });

    }).catch((e) => {
        console.log(e);
    })

});

module.exports = router;