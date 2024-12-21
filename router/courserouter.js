const express = require('express');
const router = express.Router();
const conn = require("../database/database");


// for course

router.post('/course/getlist', (req, res) => {
    var tsql = "SELECT * FROM `data-rayan`.tbl_course";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json(results);
        }
        else
            throw err
    });
});
router.post('/course/add', (req, res) => {

    var data = { coTitle: req.body.coTitle, Fk_teID: req.body.Fk_teID, Fk_insID: req.body.Fk_insID, coAbstract: req.body.coAbstract, coPrice: req.body.coPrice, coImg: req.body.coImg,coVideo: req.body.coVideo,coTime: req.body.coTime }
    var tsql = "INSERT INTO `data-rayan`.`tbl_course` (`coTitle`, `Fk_teID`, `Fk_insID`, `coAbstract`,`coPrice`, `coImg`,`coVideo`,`coTime`) VALUES ('" + data.coTitle + "', '" + data.Fk_teID + "', '" + data.Fk_insID + "', '" + data.coAbstract + "','" + data.coPrice + "', '" + data.coImg + "', '" + data.coVideo + "', " + data.coTime + ")";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json("item added");

        }
        else
            throw err
    });
});
router.post('/course/edit', (req, res) => {
    var data = {coID:req.body.coID ,coTitle: req.body.coTitle, Fk_teID: req.body.Fk_teID, Fk_insID: req.body.Fk_insID, coAbstract: req.body.coAbstract, coPrice: req.body.coPrice, coImg: req.body.coImg,coVideo: req.body.coVideo,coTime: req.body.coTime }
    var tsql = "UPDATE `data-rayan`.`tbl_course` SET `coTitle` = '" + data.coTitle + "', `Fk_teID` =  "+data.Fk_teID+", `Fk_insID` =  "+data.Fk_insID+", `coAbstract` = '"+data.coAbstract+"', `coPrice` = "+data.coPrice+", `coImg` = '" + data.coImg + "', `coVideo` = '" + data.coVideo + "', `coTime` = " + data.coTime + " WHERE (`coID` = "+data.coID+")";
    
    
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json("item edited");

        }
        else
            throw err
    });
});
router.post('/course/delete', (req, res) => {
    var data = { coID: req.body.coID }
    var tsql = "DELETE FROM `data-rayan`.`tbl_course` WHERE (`coID` = " + data.coID + ")";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json("item deleted");

        }
        else
            throw err
    });
});
router.post('/course/method', (req, res) => {
    var data = { coID: "", coTitle: "", Fk_teID: "", Fk_insID: "", coAbstract: "", coPrice: "",coImg:"",coVideo:"",coTime:"" };
    res.json(data);
});
router.post('/course/select', (req, res) => {
    var data = { coID: req.body.coID }
    var tsql ="SELECT * FROM `data-rayan`.tbl_course WHERE coID='"+data.coID+"'";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json(results);
        }
        else
            throw err;
    });
});

router.post('/course/getlist', (req, res) => {
    var tsql = "SELECT tbl_course.coID,tbl_course.coTitle,tbl_teacher.teFullName,insTitle,coPriceFROM `data-rayan`.tbl_courseinner join  `data-rayan`.tbl_teacher onFk_insID=teIDinner join `data-rayan`.tbl_institute on Fk_insID=intID";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json(results);
        }
        else
            throw err
    });
});



router.post('/course/coursefile', (req, res) => {
    var data = { Fk_coID: req.body.Fk_coID }
    var tsql ="SELECT * FROM `data-rayan`.tbl_coursesession where Fk_coID ='"+data.coID+"'";
    conn.query(tsql, (err, results) => {
        if (results) {
            res.json(results);
        }
        else
            throw err
    });
});

//for course

module.exports=router;