const seq = require('../seq')
const { STRING, DECIMAL } = require('../types')


// users
const User = seq.define('user', {
    userName: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    picture: {
        type: STRING,
        comment: '头像，图片地址'
    },
    // 账号权限
    jurisdiction: {
        type: STRING,
        comment: '权限'
    }
})

module.exports = User
