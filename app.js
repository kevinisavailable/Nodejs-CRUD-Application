const http = require("http");
const PORT = 3000;


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  }
  if(req.url === '/about'){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "About Page",
      })
    );
  }
  else{
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Page Not Found",
      })
    );
  }
  }
);
console.log(`Server is running on http://localhost:${PORT}`);
server.listen(PORT);
