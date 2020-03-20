let express = require('express');
let router = express.Router();
let db = require('../conn/db');
let md5 = require('md5');
/* GET users listing. */

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrs?><:"}|[]tuvwxyz0123456789!@#$%^&*()';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})
.post('/',(req,res,next) => {
  if(req.body.longurl == undefined)
  {
    res.send("You have to send long url to shorten them");
  }
  else
  {
    let urlid = makeid(6);
    let shorturl = makeid(10);
    let qur = "INSERT into urlmangement (urlid, shorturl, longurl) values ('"+urlid+"','"+shorturl+"','"+req.body.longurl+"')";
    db.query(qur, (err,row,fields)=> {
        if(err)
        {
          res.status(500).send("Internal server error "+err);
        }
        else
        {
          res.send({"status":"success","shorturl":"localhost:3000/"+shorturl});
        }
    })
  }
})

module.exports = router;
