const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Hello World")
})

router.post('/',(req,res)=>{
    res.json({data:"Hello World from Post"})
})

router
    .route('/book')
    .get((req,res)=>{ res.send("All books")})
    .post((req,res)=>{res.json({data:"Book is Stored"})})


router.get('/book/:id',(req,res)=>{
    res.send(`Got a single book of id ${req.params.id}`)
})

router.all('/*',(req,res)=>{
    res.send("Page Not Found")
})

module.exports = router