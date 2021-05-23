//同步所有信息  出口

// 引入数据库配置
const seq = require('./seq')

// 引入要同步的表格信息
require('./model/index')

//捕获成功失败
seq.authenticate().then(() => {
    console.log('执行成功')
}).catch(() => {
    console.log("错误")
})

//执行同步数据
//等于真 是如果有重名表 就删掉
seq.sync({ force: true }).then(() => {
    //同步完成后退出
    process.exit()
})