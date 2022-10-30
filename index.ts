import express from 'express';
import * as config from "./config.js";
import http from 'http';

const app = express();



config.getServerConfig('./config/config.json');


app.get('/', (req, res) => {
  res.send("<h1>TODO: DASHBOARD</h6>")
});

app.get('/api/:query', (req, res) => {
	if (req.params.query === 'info') {
		res.json({"version": config.version, "serverName": config.serverName});
	}
});

app.post('/node/:query', (req, res) => {
	var query = req.params.query;
  
});

http.createServer(app).listen(config.port);
