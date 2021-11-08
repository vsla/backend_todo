const Todo = require("./todo.model");

module.exports = {
  async createTodo(req, res) {
    const { description, done, user_id } = req.body;
    const newTodo = await new Todo({
      description,
      done,
      user_id,
    });

    await newTodo.save();

    res.send({ data: newTodo });
  },
  async getByUser(req, res) {
    const { id } = req.params;
    const todos = await Todo.find({ user_id: id });
    res.send({ data: todos });
  },

  async getAll(_, res) {
    const todos = await Todo.find();
    res.send({ data: todos });
  },

  async updateTodo(req, res) {
    const { id, done } = req.body;
    if(!id){
      res.status(500).send('É requerido um id')
    }
    const todoUpdate = await Todo.findById(id);
    todoUpdate.done = done;

    await todoUpdate.save();
    res.send({ data: todoUpdate });
  },
};
