const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser');

// Swagger 文件 generator
const expressOasGenerator = require('express-oas-generator')

const testApi = require('./testApi');
const app = express()

const port = 3000

// 為了確保第一個呼叫到 nodejs response.write()/end() 方法
// 處理 response 的部份要盡可能最先加入
//
// 另外只在測試時才加入
if (process.env.NODE_ENV == 'test'){
    expressOasGenerator.handleResponses(app, {
        specOutputPath: __dirname+'/output.json'
    });
}



// express 相關
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/testApi', testApi);



// 若有文件檔案存在才使用 Swagger UI
if (fs.existsSync(__dirname+'/output_v3.json')) {
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('./output_v3.json');

    // 因為使用 supertest 測試時起的服務在其它 port
    // 將伺服器連線改為實際起 app 時的
    swaggerDocument.servers = [ { "url": "http://localhost:3000" } ];

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// 為了取得經過所有 middleware 處理的 request 內容
// 處理 request 的部份需要盡可能最後加入
if (process.env.NODE_ENV == 'test') {
    expressOasGenerator.handleRequests();
}

const server = app.listen(port, () => {
    console.log('Server started at http://localhost:3000');
});

// 將 app 及 server export 出去供 supertest 使用
module.exports.nodeApp = { app, server }
