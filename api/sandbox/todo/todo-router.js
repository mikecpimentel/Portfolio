require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = [
   {
      username: "bobby",
      password: "wtf",
   },
];

function generateAccessToken(user) {
   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

function authenticateToken(req, res, next) {
   const authHeader = req.headers["authorization"];
   const token = authHeader?.split(" ")[1];
   console.log(token);
   if (token == null) {
      return res.sendStatus(401);
   }
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      console.log(user);
      req.user = user;
      next();
   });
}

// Get todo items

router.get("/", authenticateToken, (req, res, next) => {
   // if user is successfully authenticated, get posts for that specific user
   res.json(req.user.username);
   // The following should not be deleted.
   /*
   db.query(
      "SELECT id as id, title, description, completed FROM tasks ORDER BY completed ASC, id ASC"
   ).then((pgRes) => res.json(pgRes.rows));
   */
});

router.put("/", (req, res, next) => {
   const text = "UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *";
   const values = [req.body.completed, req.body.id];
   db.queryWithParams(text, values).then((dbResponse) => {
      res.send(dbResponse.rows[0]);
   });
});

router.post("/", (req, res, next) => {
   db.queryWithParams(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
      [req.body.title, req.body.description]
   ).then((data) => res.send(data.rows[0]));
});

// Users

router.get("/users", (req, res) => {
   res.json(users);
});

router.post("/users", async (req, res) => {
   try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log(hashedPassword);
      const newUser = {
         username: req.body.username,
         password: hashedPassword,
      };
      users.push(newUser);
      res.status(201).send();
   } catch {
      res.status(500).send();
   }
});

router.post("/users/login", async (req, res) => {
   const user = users.find((user) => user.username == req.body.username);
   if (user == null) {
      return res.status(400).send("Cannot find user");
   }
   try {
      if (await bcrypt.compare(req.body.password, user.password)) {
         const username = req.body.username;
         const user = { username: username };
         const accessToken = generateAccessToken(user);
         const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
         res.json({ accessToken: accessToken, refreshToken: refreshToken });
      } else {
         res.send("Not allowed");
      }
   } catch {
      res.status(500).send();
   }
});

module.exports = router;
