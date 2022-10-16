const express = require('express')
const routerAuth = express.Router()
const authController = require('./../Controllers/authController')

routerAuth.post('/signup',authController.signUp)
routerAuth.post('/login', authController.login)
module.exports = routerAuth