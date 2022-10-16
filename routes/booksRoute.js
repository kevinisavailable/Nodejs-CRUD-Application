const express = require('express')
const routerBook = express.Router()


routerBook
.route('/')
.get((req,res)=>{ res.send("All books")})
.post((req,res)=>{res.json({data:"Book is Stored"})})


routerBook.get('/:id',(req,res)=>{
res.send(`Got a single book of id ${req.params.id}`)
})


module.exports = routerBook