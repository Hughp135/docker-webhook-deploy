var express = require('express');
var app = express();
// var fs = require('fs');
var exec = require('child_process').exec;

// var key = fs.readFileSync('key.pem');
// var cert = fs.readFileSync( 'cert.pem' );
// var options = {
//   key: key,
//   cert: cert,
// };

app.get('/', (req, res) => {
  res.send('success');
});

app.post('/deploy', (req, res) => {
  console.log(req.body);
  res.send('success');
  exec("cd ../ && docker-compose up -d && docker system prune -f", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
});

var http = require('http');
http.createServer(app).listen(957);

console.log('Server listening on 957');