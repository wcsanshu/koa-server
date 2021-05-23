// api 数据库操作
const { User, staff } = require('../db/model/index')

async function UseLoginApi({ userName, password }) {

    const opt = {
        userName,
        password
    }

    // 操作数据库
    const result = await User.findOne({
        where: opt,
        attributes: ['id', 'userName', 'jurisdiction']
    })
    return result
}

//注册API接口
async function registerApi({ userName, password, jurisdiction }) {

    const result = await User.create({
        userName,
        password,
        jurisdiction
    })
    return result.dataValues
}


// 新增员工api 接口
async function UseAddStaffApi(staffjur, staffname, entrytime, staffjob) {
    const result = await staff.create({
        staffname,
        staffjur,
        entrytime,
        staffjob
    })
    return result
}

// 获取员工数据 接口
async function UseStaffListApi(page, size) {
    const pageIndex = 0
    // 开始查询
    const result = await staff.findAndCountAll({
        limit: page, //每次查询多少条
        offset: page * pageIndex, //每次跳过多少页, 分页
        // 排列规则
        order: [
            ['id', 'desc']
        ],
        // 开始查


        attributes: ['id', 'staffjur', 'staffname', 'staffjob', 'entrytime'],
        where: {}


    })

    return result
}

module.exports = {
    UseLoginApi,
    registerApi,
    UseAddStaffApi,
    UseStaffListApi
}