const express = require('express');
const DataAccess = require('../model/model-db');
//const jwt = require('jsonwebtoken')


const addYesNoPoll = (req,res)=>{
    const pollname = req.body.pollname;
    const db = new DataAccess()
    console.log(pollname)

    db.createYesNoPoll(pollname).then(data =>{
        console.log(data)
    })
    return res.status(200).json({"response":"success"})


}

const userProfile = (req,res)=>{
    
    const userdb = new UserDb()

     userdb.getUserProfile('99991234').then(data =>{
        console.log(data)
        return res.status(200).json({
            "status_code":200,
            "message":"Success",
            "response": data
         })
    
     })

}

const getPollName = (req,res)=>{
    
    const db = new DataAccess()

    db.getPollNamesDB().then(data =>{
        console.log(data)
        return res.status(200).json({
            "message":"Success",
            "response": data
         })
    
     })

}


module.exports = {
    addYesNoPoll,
    userProfile,
    getPollName
}