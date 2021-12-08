const { awsUtils } = require('../utils/awsUtils.js')

test('invoke lambda', async () => {
  let params = {
    FunctionName: 'HelloWorld', 
    Payload: JSON.stringify({ name: 'benbai123' }),
  };
  return awsUtils.Lambda.invoke(params)
    .then(resp=>{
      let payload = JSON.parse(resp.Payload);
      expect(resp.StatusCode).toBe(200);
      expect(payload.msg).toBe('Hello benbai123');
    });
});