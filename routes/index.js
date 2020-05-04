var express = require('express');
var router = express.Router();
var db = require('../conn/db');
var os = require('os');
/* GET users listing. */
router.get('',(req,res,next)=>{
    res.redirect('http://'+os.hostname()+':3000/ui/home');
});
router.get('/:id', function(req, res, next) {
    //   res.send(req.params);
    //   res.redirect('http')
        let qur = "SELECT * FROM urlmangement WHERE shorturl = '"+req.params.id+"'";
        console.log("fdg");
        db.query(qur,(err,row,field)=>{
            if(err){
                res.send(err.message);
            }
            else if(row.length < 1){
                res.send({"status":"falure","error":"not a valid short url "+req.params.id});
            }
            else{
                res.redirect(row[0].longurl);

            }
        })

    
})


module.exports = router;
