const express = require('express')

let app = express()


app.get('/', (req, res)=>{
    res.status(200).send({
        message: 'Hello to Node js server'
    })
})

app.get('/docker', (req, res)=>{
    res.status(200).send({
        message: 'This is docker route running in background on port 4000(your host/local outside):4000(docker container inside) '
    })
})

app.get('/abhi', (req, res)=>{
    res.status(200).send({
        message: 'This is running using docker volume and neglecting host node_modules and takeing containes node_module by using docker volumes, command docker run -d -p 4001:4000 -v "$(pwd)":/app -v /app/node_modules node-app'
    })
})
app.listen(4000, ()=> console.log('Port is running on http://localhost:4000'))