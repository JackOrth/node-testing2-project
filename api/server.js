const express = require("express");

const Users = require("./users/users-model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/users", (req, res) => {
  Users.getAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/users/id", (req, res) => {
  res.end()
});

function validateUser(req, res, next) {
  if (!req.body.name || !req.body.name.trim()){
    res.status(422).end()
  }else{
    next()
  }
}

server.post("/user", validateUser, async (req, res) => {
  res.status(201).json(await Users.insert(req.body))
});



module.exports = server;