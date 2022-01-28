const express = require('express');

let todos = [
  { id: 1, title: 'Write less code.', completed: false },
  { id: 2, title: 'Do basic Redux/Saga stuff.', completed: false },
  { id: 3, title: 'Without Redux/Saga. 😄', completed: false }
]

let fruits = [
  '🍌',
  '🍎',
  '🍊'
]

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/todos', (req, res) => {
  res.send(todos);
})

app.post('/api/todos', (req, res) => {
  const todo = req.body;
  todo.id = todos.length + 1;
  todo.completed = false;
  todos.push(todo);
  res.sendStatus(201);
})

app.put('/api/todos/:id', (req, res) => {
  const todoToUpdate = req.body;
  todos = todos.map((todo) => {
    if (todo.id == req.params.id) {
      return todoToUpdate
    } else {
      return todo
    }
  })
  res.send(200);
})

app.get('/api/fruits', (req, res) => {
  res.send(fruits);
})

app.post('/api/fruits', (req, res) => {
  fruits.push(req.body.fruit);
  res.sendStatus(201);
})

app.listen(PORT, () => {
  console.log(`Le serveur est opérationnel. Va voir: http://localhost:${PORT}`)
})
