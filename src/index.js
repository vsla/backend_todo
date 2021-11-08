const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongodbKey = require("./key");

// rotas
const todoRoutes = require("./resources/todo/todo.routes");

mongoose.connect(mongodbKey);

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ data: "hello world programador 2" });
});

app.use(todoRoutes);

app.listen(3001, () => {
  console.log("serviço está funcionando, porta 3001");
});
