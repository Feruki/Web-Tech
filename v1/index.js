// realize.WebServer = true;
// url ="test.de";

// http://localhost:8844

const http = require('http');
const url = require('url');



http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    res.write("Du Hurensohn");
    res.end();
}).listen(8844);