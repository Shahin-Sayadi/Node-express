
const express = require("express")
const server = express()
const port = 3000


let task = []

server.use(express.json())

server.get("/api",(req,res) =>{
    
    res.json(task)
}) 


server.post("/api",(req,res) =>{
    
    task.push(req.body)
    res.json(task)
}) 




server.use(express.static("public"))

server.listen(port,() => {
    console.log("example app listening on ${port}")
    

})