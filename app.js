const express = require('express')
const cors = require('cors') 


const app = express()
// const port = process.env.port

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(5000, ()=>{
    console.log("server is running")
})