const express = require('express');
const app = express();
const parser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5001;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

app.use(parser.json());

// POST request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/submit", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  // Add your code below
  var name = req.body.name;
  var email = req.body.email;
  var Feedback = req.body.Feedback === "" ? "n/a" : req.body.Feedback;
  var newsletter =
    req.body.newsletter === undefined
      ? "No, thank you."
      : "Yes, I would like to sign up for newsletter";

  res.write(`Name: ${name} \n`);
  res.write(`Email: ${email} \n`);
  res.write(`Comments: ${Feedback} \n`);
  res.write(`Newsletter: ${newsletter} \n`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
