const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 80;

app.use(express.static('public'));

app.get('/' , (req, res) => {
  res.sendFile( __dirname + '/view/index.html');
});

app.listen(port, () => console.log(`listen on port: ${port}!!`));
