const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/user');
const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({extend: true}));

app.post('/user',  async (req, res) => await userController.add(req, res));
app.get('/user',  async (req, res) => await userController.get(req, res));
app.post('/auth', async (req, res) => await userController.signIn(req, res));

app.get('/', (req, res) => res.send('Hello World'));
app.put('/', (req, res) => res.send('Hello World'));
app.post('/', (req, res) => res.send(req.body));
app.delete('/', (req, res) => res.send('Hello World'));


app.use((req, res) => res.send(404));

app.listen(port);
