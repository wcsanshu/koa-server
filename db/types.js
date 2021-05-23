/**
 * 建表需要用到的数据类型
 */

 const Sequelize = require('sequelize')

 module.exports = {
     STRING: Sequelize.STRING,
     DECIMAL: Sequelize.DECIMAL,
     TEXT: Sequelize.TEXT,
     INTEGER: Sequelize.INTEGER,
     BOOLEAN: Sequelize.BOOLEAN
 }
 