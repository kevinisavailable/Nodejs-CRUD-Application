const express = require('express')
const { ObjectId } = require('mongodb')
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
        await db.collection('book').insertOne(req.body)
        res.json({data:"Book is Stored"})})

routerBook
    .route('/:id')
    .get(async(req,res)=>{
        const _id = ObjectId(req.params.id)
        // const id = req.params.id
        const db = await connect()
        const book = await db.collection('book').find({_id}).toArray()
        res.json(book)
    })
    .patch(async (req,res)=>{
        const _id = ObjectId(req.params.id)
        const db = await connect()
        const book = await db.collection('book').updateOne({_id},{$set: req.body})
        res.send(`Book is Updated`)
    })
    .delete((req,res)=>{
        res.send(`Deleted a single book of id ${req.params.id}`)
    })

module.exports = routerBook