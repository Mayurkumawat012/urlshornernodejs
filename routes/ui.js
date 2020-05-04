var express = require('express');
var router = express.Router();
var fs = require('fs');
var handlebars = require('handlebars');
const path = require('path');
var {hostname} = require('../config/cred');

router.get('/home', function(req, res, next) {
    var readHTMLFile = function(path, callback) {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
          if (err) {
            throw err;
            callback(err);
          }
          else {
            callback(null, html);
          }
        });
      };

    readHTMLFile('./htmlpage/index.html', function(err, html) {
        if(err)
        {
            res.status(500).send({"status":"failure","error":"Error reading template"});
        }
        else
        {
            var template = handlebars.compile(html);
            var replacements = {
              hostname: hostname
            };
    
            var htmlToSend = template(replacements);
    
            
            res.send(htmlToSend);
            
        }
        
    }); 
    

});


module.exports = router;