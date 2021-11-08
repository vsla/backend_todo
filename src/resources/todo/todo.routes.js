const express = require("express");
const routes = express.Router();
const todoController = require("./todo.controller");

routes.get("/to-do", todoController.getAll);
routes.get("/to-do/:id", todoController.getByUser);
routes.post("/to-do", todoController.createTodo);
routes.put("/to-do", todoController.updateTodo);

module.exports = routes;
