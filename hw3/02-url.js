const http = require('http');
const port = process.env.PORT || 5002;



const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);

    res.write(`<ul> ${routeResults} </ul>`);
  }
  else{
  
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<html>");
  res.write('<table style="border:1px solid black">');
  url.searchParams.forEach((value, name) => {
  res.write('<tr style="border:1px solid black">');
    res.write(`<td style="border:1px solid black">${name}</td>`);
    res.write(`<td style="border:1px solid black">${value}</td>`);
    res.write("</tr>");
  });
  res.write("</table>");
  res.write("</html>");
  res.end();
  }

  // Add your code here

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



