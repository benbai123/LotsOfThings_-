## EC2 上使用 nodejs aws-sdk 的一些記錄

### 安裝套件與測試

##### 安裝套件

    npm install --save aws-sdk
    npm install --save-dev jest

##### 執行測試

`npm run test` 或者 `npm run test:watch`

### 相關環境設置 (SSH 連線到 EC2 實體之後)

##### EC2 config

* `~/.aws/credentials`

        [default]
        aws_access_key_id=YOUR_ACCESS_KEY_ID
        aws_secret_access_key=YOUR_SECRET_ACCESS_KEY

* `~/.aws/config`

        [default]
        region=REGION_OF_YOUR_SERVICES
        output=json

##### 設置環境變數

* 編輯 `~/.bash_profile`, 加入以下

```
export AWS_SDK_LOAD_CONFIG=1
```

* 執行 `source ~/.bash_profile` 讓它生效

### 參考文件

##### 關於環境設定

* [Loading Credentials in Node.js using a Configured Credential Process](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-configured-credential-process.html)

* [Loading Credentials in Node.js from the Shared Credentials File](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)

##### 關於 lambda

* [Getting started with Lambda](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)

* [Nodejs - Invoke an AWS.Lambda function from within another lambda function](https://stackoverflow.com/a/35795883/1042731)

##### 關於 S3

* [Upload a file to Amazon S3 with NodeJS](https://stackoverflow.com/a/28081647/1042731)

