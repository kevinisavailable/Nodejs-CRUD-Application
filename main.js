const express = require('express')
const app = express()
const PORT = process.env.PORT | 3001

const router = require('./routes/index')

app.use(router)


app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})