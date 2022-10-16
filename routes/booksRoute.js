const express = require('express')
const routerBook = express.Router()
const bookController = require('./../Controllers/bookControllers')

routerBook
    .route('/') 
    .get(bookController.index)
    .post(bookController.create)

routerBook
    .route('/:id')
    .get(bookController.book)
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook)

module.exports = routerBook