var mysql = require('./conn');


module.exports = class DataAccess {

    createYesNoPoll(pollname) {

        return new Promise(function(resolve, reject) {
         // mysql.query( "INSERT INTO `poll` (`id`,`pollname`) VALUES (NULL, '" +pollname +"', '"+ totalcast+"')"
          mysql.query( "INSERT INTO `poll` (`id`,`pollname`) VALUES (NULL, '" +pollname +"')"
          , (err, results) => {
          if(err) throw err;
          //console.log(results);
          else{
          resolve(results) ;
          }
          })
        })
}


getPollNamesDB(pollname) {

  return new Promise(function(resolve, reject) {
   // mysql.query( "INSERT INTO `poll` (`id`,`pollname`) VALUES (NULL, '" +pollname +"', '"+ totalcast+"')"
    mysql.query( "select * from  `poll`"
    , (err, results) => {
    if(err) throw err;
    //console.log(results);
    else{
    resolve(results) ;
    }
    })
  })
}


LoginData(uid,pass) {

  return new Promise(function(resolve, reject) {
    mysql.query( `select * from user where email = '${uid}' and pass = '${pass}'`
    , (err, results) => {
    if(err) throw err;
    //console.log(results);
    else{
    resolve(results) ;
    }
    })
  })
}

getUserProfile(uid){
  return new Promise(function(resolve,reject){
    mysql.query(`select * from user where phone = '${uid}'`, (err,result) =>{
      if(err){
        reject(err);
      }
      else{
        resolve(result)
      }
    })
    
  })
}

getBrands(){

    return new Promise((resolve,reject) =>{
      mysql.query(`select *  from brand order by brandname`, (err,result)=>{
        if(err){
          reject(err)
        }else{
          resolve(result)
        }
      })

    })
}


addUserVehicle(make){

      return new Promise((resolve,reject)=>{
        mysql.query("INSERT INTO `uservehicleinfo` (`recordid`,`make`) values (NULL, '" +make +"')", (err,result) =>{

          if (err){
            reject(err)
          }else{
            resolve(result)
          }
        })

      })
}


}