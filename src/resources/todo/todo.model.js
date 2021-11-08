const mongoose = require("mongoose");

const todo_schema = new mongoose.Schema({
  description: String,
  done: Boolean,
  user_id: Number,
});

const todo_model = mongoose.model("Todo", todo_schema);

module.exports = todo_model;
