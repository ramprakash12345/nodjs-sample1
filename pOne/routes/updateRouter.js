var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

router.put('/update', function (req, res, next) {
    const conn = require('../conn');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student1');
        const updateResult = await collection.updateOne({ _id: ObjectId(req.body.id)},
            { $set: req.body.data });
            res.send({ status: 200, message: 'user updated successfully', student1: updateResult });
        }).catch((e) => {
        console.log(e);
    })

});

module.exports = router;