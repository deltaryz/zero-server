const express = require("express");
const app = express();

// what should we do when we receive a request?
app.get("/", function(req, res) {
  console.log(req.query); // print URL parameters to console
  res.send("Hello World!"); // reply with hello world
});

// initiate the server
app.listen(6969);
