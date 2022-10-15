const fs = require('fs') 
const http = require("http");
const PORT = 3000;


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" })
    fs.readFile('pages/Home.html','utf8' ,(err, data) => {
        if (err) throw err
        res.write(data)
        res.end()
      })
  }
  else if(req.url === '/about'){
    res.writeHead(200, { "Content-Type": "text/html" })
    fs.readFile('pages/About.html','utf8' ,(err, data) => {
        if (err) throw err
        res.write(data)
        res.end()
      })
  }
  else{
    res.writeHead(200, { "Content-Type": "text/html" })
    fs.readFile('pages/404.html','utf8' ,(err, data) => {
        if (err) throw err
        res.write(data)
        res.end()
      })
  }
  }
);
console.log(`Server is running on http://localhost:${PORT}`);
server.listen(PORT);
