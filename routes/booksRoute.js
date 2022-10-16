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
        res.status(201).json({data:"Book is Stored"})})

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
        res.status(200).send(`Book is Updated`)
    })
    .delete(async (req,res)=>{
        const _id = ObjectId(req.params.id)
        const db = await connect()
        const book = await db.collection('book').deleteOne({_id})
        res.status(204).send()
    })

module.exports = routerBook