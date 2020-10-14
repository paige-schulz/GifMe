const Pool = require("pg").Pool;
const pool = new Pool({
  user: "paige",
  host: "localhost",
  database: "finaldb",
  port: 5432,
});

module.exports = pool;
