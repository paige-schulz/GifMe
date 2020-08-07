const Pool = require("pg").Pool;
const pool = new Pool({
  user: "paige",
  host: "localhost",
  database: "gifdb",
  password: "scooter1",
  port: 5432,
});

module.exports = pool;
