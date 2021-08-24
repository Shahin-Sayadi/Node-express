
const express = require("express")
const server = express()
const port = 3000

server.get("/",(req,res) => res.send("Hellooo world"))

server.listen(port,() => console.log("example app listening on ${port}"))