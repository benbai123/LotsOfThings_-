
console.log('started');
// 可修改以下片段, 變更 log 訊息或故意拋錯等
// 確認 pm2 的重啟
setInterval(()=>{
    console.log('test ');
    console.log(new Date());
}, 1000);

// throw 'err';