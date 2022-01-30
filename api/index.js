const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('./queries')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get('/testing', (req, res) => {
    res.json({info: 'Hey, here is some info. Cherish it.'})
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log('I is listenin\', foo\'');
})