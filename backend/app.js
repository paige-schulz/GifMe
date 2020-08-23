const express = require("express");
const bodyParser = require("body-parser");
var pool = require("./queries");
var cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("hello paige is cute");
});

app.post('/save', (req, res) => {
  console.log(req.body);
  pool.query(`INSERT INTO saved (gifurl, caption, tags) VALUES ($1, $2, $3)`, [req.body.gifUrl, 
    req.body.caption, req.body.tags], (q_err, q_res) => {
      if(q_err) {
        res.send(q_err);
        console.log("here is the error " + q_err);
      }
      res.send(q_res);
    })
})
app.get('/getSaved', (req, res) => {
  pool.query(`SELECT * FROM saved`, (q_err, q_res) => {
    if (q_err) {
      res.send(q_err);
      console.log("here is the error " + q_err);
    }
    res.send(q_res.rows);
  })
})
app.post('/like', (req, res) => {
  pool.query(
    `INSERT INTO likedgifs (gifurl) VALUES ($1)`,
    [req.body.gifUrl],
    (q_err, q_res) => {
      if (q_err) {
        res.send(q_err);
        console.log("here is the error " + q_err);
      }
      res.send(q_res);
    }
  );
})
app.get('/getLiked', (req, res) => {
  pool.query(`SELECT * FROM likedgifs`, (q_err, q_res) => {
    if (q_err) {
      res.send(q_err);
      console.log("here is the error " + q_err);
    }
    res.send(q_res.rows);
  });
})



app.listen(port, () => {
  console.log(`App be up and running on port ${port}.`);
});
