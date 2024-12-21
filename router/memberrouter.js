const express = require('express');
const router = express.Router();
const conn = require("../database/database");


// for member

router.post('/member/getlist', (req, res) => {
    var tsql = "SELECT * FROM `data-rayan`.tbl_member";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json(results);
        }
        else
            throw err
    });
});
router.post('/member/add', (req, res) => {
    var data = { mbrPhone: req.body.mbrPhone, mbrName: req.body.mbrName, mbrLastname: req.body.mbrLastname, mbrPassword: req.body.mbrPassword, mbrEmail: req.body.mbrEmail }
    var tsql = "INSERT INTO `data-rayan`.`tbl_member` (`mbrPhone`, `mbrName`, `mbrLastname`, `mbrPassword`, `mbrEmail`) VALUES ("+data.mbrPhone+", '"+data.mbrName+"', '"+data.mbrLastname+"', md5('"+data.mbrPassword+"'), '"+data.mbrEmail+"');";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json("item added");

        }
        else
            throw err
    });
});
router.post('/member/edit', (req, res) => {
    var data = {mbrId:req.body.mbrId ,mbrPhone: req.body.mbrPhone, mbrName: req.body.mbrName, mbrLastname: req.body.mbrLastname, mbrPassword: req.body.mbrPassword, mbrEmail: req.body.mbrEmail }
    var tsql = "UPDATE `data-rayan`.`tbl_member` SET `mbrPhone` = '"+data.mbrPhone+"', `mbrName` = '"+data.mbrName+"', `mbrLastname` = '"+data.mbrLastname+"', `mbrPassword` = '"+data.mbrPassword+"', `mbrEmail` = '"+data.mbrEmail+"' WHERE (`mbrId` = "+data.mbrId+")";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json("item edited");

        }
        else
            throw err
    });
});
router.post('/member/delete', (req, res) => {
    var data = { mbrId: req.body.mbrId }
    var tsql = "DELETE FROM `data-rayan`.`tbl_member` WHERE (`mbrId` = " + data.mbrId + ")";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json("item deleted");
        }
        else
            throw err
    });
});
router.post('/member/method', (req, res) => {
    var data = { mbrId: "", mbrPhone: "", mbrName: "", mbrLastname: "", mbrPassword: "", mbrEmail: "" };
    res.json(data);
});
router.post('/member/select', (req, res) => {
    var data = { mbrId: req.body.mbrId }
    var tsql ="SELECT * FROM `data-rayan`.tbl_member WHERE mbrId="+data.mbrId+"";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json(results);
        }
        else
            throw err;
    });
});
router.post('/member/login', (req, res) => {
    var data = { mbrId: req.body.mbrId }
    var tsql ="call `data-rayan`.PRC_Login('"+req.body.uname+"','"+req.body.upass+"')";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json(results);
        }
        else
            throw err;
    });
});

module.exports=router;