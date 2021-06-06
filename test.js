const Redlock = require('redlock');
// 連到 redis
const client = require('redis').createClient({ password: 'redisTest' });

// 初始化 redlock
const redlock = new Redlock( [client],
    { driftFactor: 0.01, retryCount:  0, retryDelay:  200, retryJitter:  200 } );

// 強制 unlock, 正常狀況下不建議使用
const forceUnlock = (resource)=>{
    client.get(resource, (err, value)=>{
        if (err || !value) return;
        redlock.unlock({resource, value});
    });
}

let ttl = 5000; // 要 lock 多久
let resource = 'resource-to-lock'; // 要 lock 的資源

// lock
redlock.lock(resource, ttl).then((lock)=>{
    /* resource 及 value 可記錄下來,
     以便當程序重啟但 lock 還未到期時
     可以使用它們來做 unlock
     ex: redlock.unlock({resource, value});

     若未記錄 value 但需解鎖亦可用上方定義的 forceUnlock 方法
     ex: forceUnlock(resource);
    */
    let {resource, value} = lock
    console.log({resource, value});
    console.log('first lock success');
    // 一秒後再 unlock
    setTimeout(()=>{
        lock.unlock().catch(err=>console.error(err));
    }, 1000);
}).catch(function(err) {
    console.log('falied to lock first lock');
});

// 立即再 lock 會失敗
redlock.lock(resource, ttl).then((lock)=>{
    console.log('second lock success');
}).catch(function(err) {
    console.log('falied to lock second lock');
});

// 兩秒後再 lock 應成功
setTimeout(()=>{
    redlock.lock(resource, ttl).then((lock)=>{
        console.log('third lock success');
    }).catch(function(err) {
        console.log('falied to lock third lock');
    }).finally(()=>{
        // 結束, 不然要手動 Ctrl C
        process.exit(0);
    });
}, 2000);
