const http = require('http');
const fs = require('fs');
// http.cre
const server = http.createServer((req, res) => {
    console.log(" url :" + req.url + "method: " + req.method);
    res.setHeader('Content-Type', 'image/jpg');
    res.statusCode = 200;

    //method one, asynchroneous call back
    // fs.readFile('./sample2.jpeg', (err, data) => {
    //     res.end(data);
    // });
    //method two, sync. call back
    let img= fs.readFileSync('./sample2.jpeg');
    res.end(img);
}).listen(9000);
console.log('listening......');