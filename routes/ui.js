var express = require('express');
var router = express.Router();
// var db = require('../htmlpage/index.html');
/* GET users listing. */
const path = require('path');

router.get('/home', function(req, res, next) {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // });
    // res.write(``);
    // res.end();
    res.sendFile(path.join(__dirname+'/../htmlpage/index.html'));

});


module.exports = router;