const express = require('express')
const routerBook = express.Router()
const connect = require('./../database/db')

routerBook
    .route('/')
    .get(async(req,res)=>{
        const db = await connect()
        const books =await db.collection('book').find().toArray()
         res.send(books)})
    .post(async(req,res)=>{
        const db = await connect()
        data = {
            title:"Hello Book",
            author:"Random Author"
        }
        await db.collection('book').insertOne(data)
        res.json({data:"Book is Stored"})})

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