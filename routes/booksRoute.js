const express = require('express')
const routerBook = express.Router()


routerBook
    .route('/')
    .get((req,res)=>{ res.send("All books")})
    .post((req,res)=>{res.json({data:"Book is Stored"})})

routerBook
    .route('/:id')
    .get((req,res)=>{
        res.send(`Got a single book of id ${req.params.id}`)
    })
    .patch((req,res)=>{
        res.send(`Updated a single book of id ${req.params.id}`)
    })
    .delete((req,res)=>{
        res.send(`Deleted a single book of id ${req.params.id}`)
    })

module.exports = routerBook