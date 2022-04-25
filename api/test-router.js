const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
   console.log("You are in test router territory.");
   next();
});

router.get("/", (req, res) => {
   console.log(`You've reached the test router's home page.`);
});

router.get("/:blah", (req, res) => {
   console.log(`You are looking for ${req.params.blah} in the test router`);
   res.send("Here it is....");
});

module.exports = router;
