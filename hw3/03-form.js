const http = require('http');
//const static = require('node-static');
const querystring = require('node:querystring');
const port = process.env. PORT || 5001;
//const file = new static.Server("./public");
const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/form')
     {
      res.writeHead(200, { "Content-Type": "text/html" });
     const formHTML = `
     <body>
     <form method="post" action = "/submit">
      <label for="name"> Name:</label><input type = placeholder name="name" id ="name"><br>
      <label for="email"> Email:</label><input type = placeholder name="email" id = "email"><br>
      <input type="submit">
     </form>
     </body>`;
     res.write(formHTML);
     res.end();
     }  
    
    else if (req.method ==='POST' && req.url === '/submit') {
    let body = '';
    req.on ('data', (chunk) => { 
        body += chunk;}
    );
    req.on('end', () =>{
    const userdata = querystring.parse(body) ;
    console.log(userdata);
    const {name, email} = userdata;
    res.writeHead(200, {'Content-Type': 'text/html' }) ;
    res.write(`<p>Name: ${name}</p>`);
    res.write(`<p>Email: ${email}</p>`);
    res.end ();
    });
}
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
