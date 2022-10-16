const connect = require('./../database/db')
const { ObjectId } = require('mongodb')

exports.index = async(req,res)=>{
    const db = await connect()
    const books =await db.collection('book').find().toArray()
    res.send(books)}

exports.create = async(req,res)=>{
    const db = await connect()
    await db.collection('book').insertOne(req.body)
    res.status(201).json({data:"Book is Stored"})}

exports.book = async(req,res)=>{
    const _id = ObjectId(req.params.id)
    // const id = req.params.id
    const db = await connect()
    const book = await db.collection('book').find({_id}).toArray()
    res.json(book)
}

exports.updateBook = async (req,res)=>{
    const _id = ObjectId(req.params.id)
    const db = await connect()
    const book = await db.collection('book').updateOne({_id},{$set: req.body})
    res.status(200).send(`Book is Updated`)
}

exports.deleteBook = async (req,res)=>{
    const _id = ObjectId(req.params.id)
    const db = await connect()
    const book = await db.collection('book').deleteOne({_id})
    res.status(204).send()
}