const express = require('express');

const userlogin = require('../controller/login');
const {genToken,verifyToken} = require('../controller/auth');
const {signup, login}  = require('../controller/ctrl-signup');

const {userProfile,addUserVehicle}  = require('../controller/ctrl-poll');

const brands = require('../controller/ctrl-brand');


const router = express.Router();

//router.post('/checklogin', userlogin.checklogin);


router.get('/token', genToken);

router.get('/chktoken', verifyToken);

router.post('/signup', signup);

router.post('/login', login);

router.get('/userprofile',verifyToken, userProfile);

router.get('/brands', brands);

router.post('/adduservehicle', addUserVehicle )


// router.get('/getbrand', (req, res, next) => {
//     res.status(200).json({
//        "status_code":200,"message":"Success","Data":[{"id":"1","connector":"AC Type-1","type":"AC"},{"id":"2","connector":"CCS-1","type":"DC"}]
//     })
//   });




  module.exports = router;
