// 连接数据库


// 用sequelize 连接操作数据库
const Sequelize = require('sequelize')

const conf =
{
    host: 'localhost',
    port: '3389',
    dialect: 'mysql'
}
const seq = new Sequelize('elementadmin', 'root', 'huigedeyi123', conf)

module.exports = seq

