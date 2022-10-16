const { application } = require('express')
const express = require('express')
const router = express.Router()
const routerBook = require('./booksRoute')

router.get('/',(req,res)=>{
    res.send("Hello World")
})

router.post('/',(req,res)=>{
    res.json({data:"Hello World from Post"})
})

router.use('/book',routerBook)

router.all('/*',(req,res)=>{
    res.send("Page Not Found")
})

module.exports = router