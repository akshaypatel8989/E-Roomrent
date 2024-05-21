const express =require('express')
const router = express.Router()
const auth = require('../cantroller/auth-cantroller')


router.route('/Home').get(auth.Home)
//router.route('/Home').post(auth.Home)


//router.route('/Login').get(auth.Login)
router.route('/Login').post(auth.Login)

module.exports=router