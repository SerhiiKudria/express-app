const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const tasksDB = [
  {
    id: '4b37abb7-1c77-4101-abac-fca5e3fed37d',
    name: 'test',
    isDone: true,
    deadline: '',
  },
  {
    id: '0a8d9bfe-180f-4e48-9bce-07984c017a43',
    name: 'test2',
    isDone: false,
    deadline: '',
  },
  {
    id: '73a0702c-f1aa-46ca-bd0d-155fe653dc69',
    name: 'test3',
    isDone: true,
    deadline: '2023-02-09',
  },
  {
    id: '8f6da772-0fa5-44c9-ba5f-22e615634510',
    name: 'new test',
    isDone: false,
    deadline: '',
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({ ...newTask, id: uuidv4(), isFavourite: false });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks () {
    return [...this.tasks];
  }

  getTaskById (id) {
    const foundIndex = this.tasks.findIndex(c => c.id === Number(id));
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(c => c.id === Number(id));
    if (foundTaskIndex !== -1) {
      this.tasks[foundContactIndex] = {
        ...this.tasks[foundContactIndex],
        ...values,
      };
    }

    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  deleteTask (id) {
    const foundTaskIndex = this.task.findIndex(c => c.id === Number(id));

    return foundTaskIndex === -1 ? null : this.task.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstace = new TasksDB(tasksDB);

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('express-app )))');
});

// CRUD
app.get('/tasks', (req, res) => {
  const task = tasksDbInstace.getTasks();
  res.status(200).send(task);
});

app.post('/tasks', (req, res) => {
  const createdTask = tasksDbInstace.createTask(req.body);
  res.status(201).send(createdTask);
});

app.get('/tasks/1', (req, res) => {});
app.patch('/tasks/1', (req, res) => {});
app.delete('/tasks/1', (req, res) => {});

module.exports = app;
