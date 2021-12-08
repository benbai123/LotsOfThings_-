const AWS = require('aws-sdk');

/* 直接設值的寫法
AWS.config.update({ 
    accessKeyId: 'YOUR_ACCESS_KEY_ID', 
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY', 
    region: 'REGION_OF_YOUR_SERVICES',
});
*/

/* 將 key 及 secret 寫在設定檔的寫法,
 * 另外需設定環境變數 AWS_SDK_LOAD_CONFIG=1
 */
let credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

const S3 = {
    putObject (Key, Body, ContentType,
        Bucket='YOUR_S3_BUCKET_NAME', ACL='public-read' ) {
        return new Promise((resolve, reject)=>{
            const s3 = new AWS.S3();
            s3.putObject({ Key, Body, ContentType, Bucket, ACL },
                function (err, data) {
                    if (err) reject(err);
                    else resolve(data);
                })
            });
    }
}
const Lambda = {
    invoke(params) {
        const lambda = new AWS.Lambda();
        return lambda.invoke(params).promise();
    }
}

module.exports.awsUtils = {
    S3, Lambda
};