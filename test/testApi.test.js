const request = require("supertest");

const nodeApp = require('../app/app').nodeApp;

// 將 app 包為 supertest agent
const agent = request.agent(nodeApp.app);

test('test hello api', async () => {
    // 打 api
    let res = await agent.post('/testApi/hello')
        .send({ name: 'Ben' });

    // 確認回傳值
    expect(res.body.msg).toBe('Hello Ben!');
});

// 結束後關閉 nodejs server
afterAll( async () => {
    nodeApp.server.close()
});
