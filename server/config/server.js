'use strict';

const express = require('express');
const routes = require('./routes');
const bodyParser = require("body-parser")
const app = express();

app.use('/', routes);

app.use(bodyParser.json());

const port = 1234;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})