const express = require('express')
const bodyParser = require('body-parser');

const testApi = require('./testApi');
const app = express()

const port = 3000

// express 相關
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/testApi', testApi);

const server = app.listen(port, () => { });

// 將 app 及 server export 出去供 supertest 使用
module.exports.nodeApp = { app, server }