import express from 'express';

const app = express();



app.get('/info', (req, res) => {
  res.sendjson({"version": version, "serverName": serverName});
});

app.listen(() => {
  console.log('Server started');
});
