const path = require('path');

const express = require('express');

const app = express();

const routes = require('./routes/bootstrap');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', routes);

app.use(express.static(path.join(__dirname,'public'))); // <==allows access to the public folder which are static files


app.listen(3000);