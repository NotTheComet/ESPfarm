import express from 'express';
import http from 'http';

const app = express();

var version = process.env.NODE_ENV || 'development';
var serverName = process.env.SERVER_NAME || 'localhost';
var port = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.json({"version": version, "serverName": serverName});
});

app.post('/node/:query', (req, res) => {
	var query = req.params.query;

  
});

http.createServer(app).listen(port);
