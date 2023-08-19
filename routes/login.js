const express = require('express');
const router = express.Router();

const {login}  = require('../controller/login');



//router.post('/checklogin', userlogin.checklogin);


router.get('/poll/v1/login', login )


// router.get('/getbrand', (req, res, next) => {
//     res.status(200).json({
//        "status_code":200,"message":"Success","Data":[{"id":"1","connector":"AC Type-1","type":"AC"},{"id":"2","connector":"CCS-1","type":"DC"}]
//     })
//   });




  module.exports = router;
