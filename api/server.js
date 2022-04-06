const cors = require("cors");
const express = require("express");
const testRouter = require("./test-router");
const todoRouter = require("./sandbox/todo/todo-router");
const jwt = require('jsonwebtoken')

const app = new express();

const sayHello = (req, res, next) => {
   console.log(
      `Hello from: ${req.params.test1}, ${req.params.test2}, and ${req.params.test3}`
   );
   next();
};

app.use(express.json());


app.post('/login', (req, res) => {
   // Authentication

   const username = req.body.username



   res.send({token: 'test123'});
})

app.use("/todo", cors(), todoRouter);

app.listen(3010, () => {
   console.log(`Now listening on port 3010`);
});
console.log('testing')