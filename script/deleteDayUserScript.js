var db = require('../conn/db');
console.log("Script Started");
let iter = 1;
function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }
function deleteShortUrlAfter24Hr(){
    let qur = "SELECT urlid,created_at FROM urlmangement";
    let newPromiseAppendToDelete=[];

    db.query(qur,(err,row,field)=>{
        if(err){
            return new Promise((resolve,reject) =>{
                console.log("Error Removed User "+err);
                newPromiseAppendToDelete.push('Failure');
                resolve('Failure');
            })
            
        }
        else{
            console.log(JSON.stringify(row))
            row.map((item,index)=>{
                return new Promise((resolve,reject) =>{
                    let dataNow = new Date();
                    let urlDate = new Date(item.created_at);
                    // let urlDate =item.created_at.split(/[- :]/);
                    // urlDate = new Date(Date.UTC(urlDate[0], urlDate[1]-1, urlDate[2], urlDate[3], urlDate[4], urlDate[5]));
                    // console.log(dataNow, urlDate);
                    let remainingTime = diff_hours(dataNow, urlDate);
                    if( remainingTime>=24){
                        let qur2 = "DELETE FROM urlmangement where shorturl= '"+item.urlid+"'";
                        db.query(qur2,(err,row2,field)=>{
                            if(err){
                                console.log("Error Removed User "+err);
                                newPromiseAppendToDelete.push('Failure');
                                resolve('Failure');
                            }
                            else{
                                console.log("Succesfully Removed User");
                                newPromiseAppendToDelete.push('Success');
                                resolve('Success');
                            }
                            
                        })
                    }
                    else{
                        console.log("Time Remaining "+remainingTime);
                        newPromiseAppendToDelete.push('Success');
                        resolve('Time Remaining');
                    }

                    

                })
            })
        }
        
        Promise.all(newPromiseAppendToDelete).then((data)=>{
            console.log("Script iteration number "+data +" " +iter++);
        })
    })
}




setInterval(()=>{
    deleteShortUrlAfter24Hr();
},360000);