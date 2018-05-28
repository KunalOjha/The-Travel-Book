const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

//PathLocationStategy, Angular handles the routing for the SPA, NOT the Node Server.
app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});
