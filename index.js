const dotenv = require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.use("/api/",(_,res)=>{
    res.json({data:"API is accounted for"})
})

app.listen(port, ()=>{
    console.log(`server is alive and on port ${port}`)
})

// console.log('its alive!')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER) //pc USERNAME
// console.log(process.env.PORT)
