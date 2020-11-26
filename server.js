const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Connected to the API Server')
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`))