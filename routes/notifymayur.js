var dotenv = require('dotenv');
dotenv.config();
var smtpTransport = require('nodemailer-smtp-transport');
var fs = require('fs');
var handlebars = require('handlebars');
var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
 
/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource');
  res.status(404).send({"status":"failure","error":"page not found"});
})
.post('/',(req,res,next) =>{ 
    if(req.body.firstname && req.body.lastname && req.body.message && req.body.subject && req.body.uemail && req.body.tomail) {
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
          
          let email =process.env.email;
           let pass =process.env.pass;

          smtpTransport = nodemailer.createTransport({
            service: 'gmail',
            port: 993,
            auth: {
              user: email, // generated ethereal user
              pass: pass // generated ethereal password
            }
            });
          
          readHTMLFile('./htmlpage/emailtemp.html', function(err, html) {
            var template = handlebars.compile(html);
            var replacements = {
              firstname: req.body.firstname,
              lastname:req.body.lastname,
              message:req.body.message,
              uemail:req.body.uemail

            };
            var htmlToSend = template(replacements);
            var mailOptions = {
              from: process.env.email,
              to: req.body.tomail,
              subject : req.body.subject,
              html : htmlToSend
            };
            smtpTransport.sendMail(mailOptions, function (error, response) {
              if (error) {
                console.log(process.env.email,process.env.pass,error);
                console.log(typeof process.env.email)
                console.log(typeof process.env.pass)
                res.status(500).json({"status":"failure","error":"Error in Sending Mail"});
      
              }
              else
              {
                res.send({"status":"success","msg":"Mayur is Notified with your Message."});   
                console.log({"status":"success","msg":"Mayur is notified with your Message."});
              }
            });
          });
    }
    else {
        var resp = {"status":"failure","error":"unautorized access, fiels are not complete","body":req.body};
        res.json(resp);
    }
});


module.exports = router;