
const express = require("express")
const server = express()
const port = 3000


let cars = []

server.use(express.json())

server.get("/api",(req,res) =>{
    res.json("Hellooo world")
}) 


server.post("/api",(req,res) =>{
    
    cars.push(req.body)
    res.json(cars)
}) 


server.use(express.static("public"))

server.listen(port,() => console.log("example app listening on ${port}"))