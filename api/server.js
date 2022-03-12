const db = require("./db");
const cors = require("cors");
const express = require("express");
const testRouter = require("./routers/test-router");

const app = new express();

const sayHello = (req, res, next) => {
   console.log(
      `Hello from: ${req.params.test1}, ${req.params.test2}, and ${req.params.test3}`
   );
   next();
};

app.use(cors());

app.get("/", async (req, res) => {
   const response = await db.query("SELECT * FROM users ORDER BY name", []);
   const niceRes = JSON.stringify(response, null, 4);
   // res.type("json");
   console.log("app.get is run");
   res.status(200).send(niceRes);
});

app.listen(3010);
