const http = require("http");
const fs = require("fs/promises");

const PORT = 5000;

const requestListener = async (req, res) => {
  const { url, method } = req;

if(method === 'GET'){
  if (url === "/index.html") {
    try {
      const data = await fs.readFile("./views/MainPage/index.html", "utf-8");
      res.statusCode = 200;
      res.end(data);
    } catch (error) {
      res.statusCode = 404;
      res.end(error.message);
    }
  } else if (url === "/style.css") {
    try {
      const data = await fs.readFile("./views/style.css", "utf-8");
      res.statusCode = 200;
      res.end(data);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    const data = await fs.readFile("./views/NotFoundPage/index.html", "utf-8");
    res.end(data);
  }
} else if(method === 'POST'){
  if (url === '/user') {
    //Logic create user

    let jsonString = '';
    req.on('data', (chunk) => {
      jsonString += chunk;
    })
    req.on('end', () => {
      const user = JSON.parse(jsonString);
      console.log(user);
    })
  }
} else{
  res.statusCode = 500;
  res.end();
}
};

const server = http.createServer(requestListener);

server.listen(PORT);
