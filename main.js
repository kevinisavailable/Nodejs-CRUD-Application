const express = require('express')
const app = express()
const PORT = process.env.PORT | 3001
var bodyParser = require('body-parser')
const connectDB = require('./database/db')
app.set('view engine', 'ejs');
app.use(bodyParser.json())

const router = require('./routes/index')
app.use(router)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Started on http://localhost:${PORT}`)
    })
})
