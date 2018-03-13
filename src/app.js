const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const login = require('./router/login');

const app = express();
const rootPath = path.join(__dirname, '../');
const staticPath = path.join(rootPath, 'static');

app.use(express.static(staticPath));

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: false}));
// create application/json parser
app.use(bodyParser.json());

app.use('/', login);

app.listen(8000);
console.log('app listen 8000 port!');
