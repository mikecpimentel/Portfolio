const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get('/testing', (req, res) => {
    res.json({info: 'Hey, here is some info. Cherish it.'})
})

app.listen(port, () => {
    console.log('I is listenin\', foo\'');
})