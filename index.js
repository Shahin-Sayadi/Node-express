const express = require("express");
const fetch = require("node-fetch");
const server = express();
const port = 3000;

let task = [];

server.use(express.json());

server.get("/catInfo", (req, res) => {
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json(data);
    });
});

server.get("/api", (req, res) => {
  res.json(task);
});

server.post("/api", (req, res) => {
  task.push(req.body);
  
  res.json("sparad");
  
});

server.delete("/api/:id",(req,res) => {
    const id = req.params.id
    const index = task.findIndex((task) => task.id == id);
    task.splice(index,1)
    res.json(task)
    

})

server.use(express.static("public"));

server.listen(port, () => {
  console.log("example app listening on ${port}");
});
