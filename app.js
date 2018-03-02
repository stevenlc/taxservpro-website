var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.render("home");
});

app.listen("5000", process.env.IP, function(req, res) {
  console.log("Server for taxservpro has started!");
});
