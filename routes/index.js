const { application } = require('express')
const express = require('express')
const router = express.Router()
const routerBook = require('./booksRoute')
const path = require('path')


router.get('/',(req,res)=>{
    res.render('pages/index',{
        name:"Kevin"
      })})

router.post('/',(req,res)=>{
    res.json({data:"Hello World from Post"})
})

router.use('/book',routerBook)

router.all('/*',(req,res)=>{
    res.render('pages/404')
})

module.exports = router