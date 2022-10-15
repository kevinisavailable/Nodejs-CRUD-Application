const http = require("http");
const PORT = 3000;


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Homepage</h1>")
    res.end()
  }
  if(req.url === '/about'){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>")
    res.end()
  }
  else{
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>")
    res.end()
  }
  }
);
console.log(`Server is running on http://localhost:${PORT}`);
server.listen(PORT);
