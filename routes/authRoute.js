const express = require('express')
const routerAuth = express.Router()
const authController = require('./../Controllers/authController')

routerAuth.post('/signup',authController.signUp)

module.exports = routerAuth