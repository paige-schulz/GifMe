const express = require("express");
const bodyParser = require("body-parser");
var pool = require("./queries");
var cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("hello paige is cute");
});

app.get("/imageids", (req, res) => {
  console.log("before pool is reached");
  pool.query(`SELECT id FROM image`, (q_err, q_res) => {
    if (q_err) {
      console.log("hiya");
      res.send(q_err);
      console.log("here is the error " + q_err);
    }
    console.log("last reached");
    res.send(q_res.rows);
  });
});
app.get("/image", (req, res) => {
    pool.query(`SELECT * FROM image WHERE id = ${req.query.id}`, (q_err, q_res) => {
      if(q_err) {
        res.send(q_err);
        console.log("here is the error " + q_err);
      }
      res.send(q_res.rows);
    })
});
app.get("/gifs", (req, res) => {
  pool.query(`SELECT * FROM gifs WHERE id = ${req.query.id}`, (q_err, q_res) => {
    if(q_err) {
      res.send(q_err);
      console.log("here is error " + q_err);
    }
    res.send(q_res.rows);
  })
})
app.get("/tags", (req, res) => {
  pool.query(`SELECT * FROM tags WHERE id = ${req.query.id}`, (q_err, q_res) => {
    if (q_err) {
      res.send(q_err);
      console.log("here is error " + q_err);
    }
    res.send(q_res.rows);
  })
})

app.listen(port, () => {
  console.log(`App be up and running on port ${port}.`);
});
