const express = require('express')

let app = express()


app.get('/', (req, res)=>{
    res.status(200).send({
        message: 'Hello to Node js server abhishek'
    })
})

app.get('/docker', (req, res)=>{
    res.status(200).send({
        message: 'This is docker route running in background on port 4000(your host/local outside):4000(docker container inside) '
    })
})
// -v "$(pwd)":/app

// Bind mount the current directory on your host ($(pwd) = "print working directory") into /app inside the container.

// Means: the files you have locally will instantly appear inside the container.

// Good for development, so changes to code don’t require rebuilding the image.

// -v /app/node_modules

// This is a volume mount without a host path — it creates an anonymous volume for /app/node_modules inside the container.

// Why?

// If you mount your whole project folder (-v "$(pwd)":/app), it would overwrite the container’s /app/node_modules folder with your local one (which might be empty or incompatible).

// This trick ensures container’s node_modules stays intact even when you override /app with your local code.

app.get('/abhi', (req, res)=>{
    res.status(200).send({
        message: 'This is running using docker volume and neglecting host node_modules and takeing containes node_module by using docker volumes, command docker run -d -p 4001:4000 -v "$(pwd)":/app -v /app/node_modules node-app'
    })
})

app.get('/dockercompose', (req, res)=>{
    res.status(200).send({
        message: "This is docker compose used to reduce build and run command for docker and allow multi containor connction for data sharing and other purpose."
    })
})

//now we have created pipline for asw ec2 instance docker k abhi
app.listen(4000, ()=> console.log('Port is running on http://localhost:4000'))