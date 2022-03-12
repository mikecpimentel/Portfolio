const db = require("./db");

const getUsers = (req, res) => {
   db.query("SELECT * FROM users ORDER BY name", []);
   return;
};

/*
const getUserById = (req, res) => {
   const id = parseInt(req.params.id);

   db.query("SELECT * FROM users WHERE id = $1", [id], (err, res) => {
      if (err) {
         throw err;
      }
      res.status(200).json(res.rows);
   });
};

const createUser = (req, res) => {
   const { name, email } = req.body;

   db.query(
      "INSERT INTO users (name, email) VALUES ($1, $2)",
      [name, email],
      (err, res) => {
         if (err) {
            throw err;
         }
         res.status(201).send(`User added with ID: ${res.insertId}`);
      }
   );
};

const updateUser = (req, res) => {
   const id = parseInt(req.params.id);
   const { name, email } = req.body;

   db.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3",
      [name, email, id],
      (err, res) => {
         if (err) {
            throw err;
         }
         res.status(200).send(`User modified with ID: ${id}`);
      }
   );
};

const deleteUser = (req, res) => {
   const id = parseInt(req.params.id);

   db.query("DELETE FROM users WHERE id = $1", [id], (err, res) => {
      if (err) {
         throw err;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
   });
};
*/

module.exports = {
   getUsers
   /*
   getUserById,
   createUser,
   updateUser,
   deleteUser,*/
};
