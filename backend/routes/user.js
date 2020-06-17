const express = require('express');
const router = express.Router();
const sqlconnection = require( "../database/db");

router.post('/insertUpdateUser', function (req, res, err) {
    var sql = 'CALL InsertUpdateUsers('+req.body.id + ' ,"'+req.body.name+'","'+req.body.address+'","'+req.body.city+'","'+req.body.phone+'");';;
    sqlconnection.query(sql, function (err, result) {
        if (err) throw err;
        res.json({message:result})
         });
})

router.get('/getUsers/:id', function (req, res, err) {
    var sql = 'call getUsers('+req.params.id+')';
    sqlconnection.query(sql, function (err, result) {
        if (err) throw err;
        res.json({message:result})
         });
})
router.put('/deleteUser/:id', function (req, res, err) {
    var sql = 'call delete_user('+req.params.id+')';
    sqlconnection.query(sql, function (err, result) {
        if (err) throw err;
        res.json({message:result})
         });
})
module.exports = router;