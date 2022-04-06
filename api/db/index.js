require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool();

module.exports = {
   async query(text) {
      // const start = Date.now();
      const res = await pool.query(text);
      // const duration = Date.now() - start;
      // console.log('executed query', { text, duration, rows: res.rowCount });
      return res;
   },
   async queryWithParams(text, params) {
      return await pool.query(text, params);
   },
};
