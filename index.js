const express = require('express');
let todos = [];
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.get('/', (req, resp) => resp.send('Hello, world!'));
app.get('/todos', (req , resp) => resp.json(todos));
app.post('/todos', (req , resp) => {
    todos.push(req.body);
    resp.status(201).send(req.body);
});
app.listen(port, () => console.log(`Express server is running on http://localhost:${port}`));