// 連到 redis
const redis = require('redis');

// 建立 pub/sub client
const subscriber = redis.createClient({ password: 'redisTest' });
const publisher = redis.createClient({ password: 'redisTest' });

let channelName = 'a channel';

// 第一個訊息 不會被 subscriber 接收到
publisher.publish(channelName, "a message");

// 故意延後 subscribe
setTimeout(()=>{
    subscriber.subscribe(channelName);
}, 1000);

setTimeout(()=>{
    // 第二個訊息, 會被 subscriber 接收到
    publisher.publish(channelName, "another message");
}, 2000);

subscriber.on("subscribe", function(channel, count) {
    // subscribe 完成時的事件
});

subscriber.on("message", function(channel, message) {
    // 收到訊息
    console.log("Subscriber received message in channel '" + channel + "': " + message);

    // quit, 不然要手動 Ctrl C
    subscriber.unsubscribe();
    subscriber.quit();
    publisher.quit();
});
