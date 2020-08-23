const Pool = require("pg").Pool;
const pool = new Pool({
  user: "paige",
  password: "scooter1",
  host: "localhost",
  database: "finaldb",
  port: 5432,
});

module.exports = pool;
