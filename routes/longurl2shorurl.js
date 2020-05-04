let express = require('express');
let router = express.Router();
let db = require('../conn/db');
var os = require('os');
/* GET users listing. */

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrs';
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
  if(req.body.longurl == undefined || req.body.longurl == "")
  {
    res.send({"status":"failure","shorturl":"empty field"});
  }
  else
  {
    let urlid = makeid(6);
    let shorturl = makeid(10);
    let query_isexist = "SELECT * FROM urlmangement WHERE longurl = '"+req.body.longurl+"'";
    db.query(query_isexist, (err,row,fields)=> {
      if(err){
        res.status(500).send({status:"failure",error:"Internal server error "+err});
      }
      else{
        if(row.length > 0){
          res.send({"status":"success","shorturl":os.hostname()+":3000/"+row[0].shorturl});
        }
        else{
          let qur = "INSERT into urlmangement (urlid, shorturl, longurl) values ('"+urlid+"','"+shorturl+"','"+req.body.longurl+"')";
          db.query(qur, (err,row2,fields)=> {
              if(err)
              {
                res.status(500).send({status:"failure",error:"Internal server error "+err});
              }
              else
              {
                res.send({"status":"success","shorturl":os.hostname()+":3000/"+shorturl});
              }
          })
        }
      }
    });
    
  }
})

module.exports = router;
