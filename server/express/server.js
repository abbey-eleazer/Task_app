import express from "express";

const app = express();
const port = 3000;

const router = express.Router();
      app.use(express.json());

let tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'pending' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'completed' },
  { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'in progress' }
];

app.get('/', (req, res) => {
  res.send('Welcome to the Task API');
});

router.get('/', (req, res) => {
 res.json(tasks)
});

router.post('', (req, res) => {
 res.send('CREATE a new task')
})

router.get('/', (req, res) => {
 res.send('READ all tasks')
})

router.get('/:id', (req, res) => {
 res.send('GET a tasks')
})

router.put('/:id', (req, res) => {
 res.send('UPDATE a task')
})

router.delete('/:id', (req, res) => {
 res.send('DELETE a task ')
})
app.use('/api/v1/task', router);
app.listen(port, () => (`Server is running on http://localhost: ${port}`));