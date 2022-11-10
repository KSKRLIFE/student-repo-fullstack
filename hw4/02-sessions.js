const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;
const url = require('url');


// Add your code here

// Use the express-session module

app.use(session({ resave: false ,secret: '123456' , saveUninitialized: true}));

app.get("/favicon.ico", (req, res) => {res.sendStatus(304);});

app.get('/', (req, res) => {
  var PathName = url.parse(req.url).pathname;
  res.writeHead(200, { "content-type": "text/plain" });
  if (req.session.data === undefined) {
    req.session.data = [PathName];
    res.write("currently on route: " + PathName);
    res.write("\n");
    res.write("Welcome to http://localhost:5001/ ");
    res.end();
  } else {
    res.write("currently on route: " + PathName + "\n");
    res.write("previously visited: \n");
    res.write(req.session.data.join("\n"));
    req.session.data.push(PathName);
    res.end();
  }

});
 app.get("*", (req, res) => {
  var PathName = url.parse(req.url).pathname;
  console.log(PathName);
  res.writeHead(200, { "content-type": "text/plain" });
  if (req.session.data === undefined) {
    req.session.data = [PathName];
    res.write("currently on route: " + PathName);
    res.write("\n");
    res.write("previously visited: \n");
    res.end();
  } else {
    res.write("currently on route: " + PathName);
    res.write("\n");
    res.write("previously visited:");
    res.write("\n");
    res.write(req.session.data.join("\n"));
    req.session.data.push(PathName);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


