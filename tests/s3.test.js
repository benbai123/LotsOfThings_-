const fs = require('fs');
const path = require('path');
const { awsUtils } = require('../utils/awsUtils.js')

test('upload file', () => {
	// file location: https://images.benbai123.win/stockfeel_search_graph/test.png
  let filePath = path.join(__dirname, '..', 'test.png');
  let Key = 'stockfeel_search_graph/'+path.basename(filePath);
  let Body = fs.readFileSync(filePath);
  let ContentType = 'image/png';

  return awsUtils.S3.putObject(Key, Body, ContentType)
    .then(data=>{
      expect(Object.keys(data).includes('ETag')).toBe(true);
    });
  
});
