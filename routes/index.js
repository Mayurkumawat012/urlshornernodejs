var express = require('express');
var router = express.Router();
var db = require('../conn/db');
/* GET users listing. */



router.get('/:id', function(req, res, next) {
    //   res.send(req.params);
    //   res.redirect('http')
        let qur = "SELECT * FROM urlmangement WHERE shorturl = '"+req.params.id+"'"
        db.query(qur,(err,row,field)=>{
            res.redirect(row[0].longurl);
        })
//   let urlid = makeid(6);
//   let shorturl = md5(req.body.longurl);
//   let qur = "INSERT into urlmangement (urlid, shorturl, longurl) values ('"+urlid+"','"+shorturl+"','"+req.body.longurl+"')";
//   db.query(qur, (err,row,fields)=> {
//       if(err)
//       {
//         res.status(500).send("Internal server error "+err);
//       }
//       else
//       {
//         res.send({"status":"success","shorturl":"127.0.0.1/"+shorturl});
//       }
//   })
    
})


module.exports = router;
