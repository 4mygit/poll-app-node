const express = require('express');
const DataAccess = require('../model/model-db');
const jwt = require('jsonwebtoken')


const login = (req,res)=>{
    //const pollname = req.body.pollname;
    //const db = new DataAccess()
    //console.log(pollname)

    // db.createYesNoPoll(pollname).then(data =>{
    //     console.log(data)
    // })
   
    const token = jwt.sign('thisisme', 'secret',(err,token)=>{
        console.log(token)
       if(!err){
        return res.status(200).json({
            "status_code":200,
            "message":"Success",
            "token": token
         })
        }else{
            return res.status(403).json({
                "status_code":403,
                "message":"Failed"
                
        })
    } 
    });



}




module.exports = {
    login
}