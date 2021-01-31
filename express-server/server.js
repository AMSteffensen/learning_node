const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at");
});

app.get("/about", function (req, res) {
    res.send("I am a full-stack developer");
  });

app.post("/", function (req, res) {
    res.send("Got a POST request");
});

app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
