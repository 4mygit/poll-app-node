const express = require('express');
const router = express.Router();

const {userProfile,addYesNoPoll,getPollName}  = require('../controller/ctrl-poll');
const {isAuth} = require ('../middleware/auth')



//router.post('/checklogin', userlogin.checklogin);


router.post('/poll/v1/createynpoll', isAuth, addYesNoPoll )
router.get('/poll/v1/getpollnames', getPollName)
//router.get('/poll/v1/getpollnames', isAuth, getPollName)


// router.get('/getbrand', (req, res, next) => {
//     res.status(200).json({
//        "status_code":200,"message":"Success","Data":[{"id":"1","connector":"AC Type-1","type":"AC"},{"id":"2","connector":"CCS-1","type":"DC"}]
//     })
//   });




  module.exports = router;
