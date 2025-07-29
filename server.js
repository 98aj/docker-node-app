const express = require('express')

let app = express()


app.get('/', (req, res)=>{
    res.status(200).send({
        message: 'Hello to Node js server'
    })
})
app.listen(4000, ()=> console.log('Port is running on http://localhost:4000'))
