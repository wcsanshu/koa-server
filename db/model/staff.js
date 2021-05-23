// 员工管理表格
const seq = require('../seq')
const { INTEGER, STRING } = require('../types')
const UserStaff = seq.define('userstaff', {
    // 员工权限
    staffjur: {
        type: STRING,
        allowNull: false,
        // unique: true,
        comment: '员工权限'
    },
    staffname: {
        type: STRING,
        allowNull: false,
        comment: '员工姓名'
    },
    staffjob: {
        type: STRING,
        allowNull: false,
        comment: "员工职位"
    },
    entrytime: {
        type: STRING,
        allowNull: false,
        comment: "入职时间"
    }
})


module.exports = UserStaff