'use strict';

const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/', routes);

const port = 1234;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})