const { UseLoginApi, registerApi } = require('../servioes/user')
const { UseAddStaffApi, UseStaffListApi } = require('../servioes/user')
const jwt = require('jsonwebtoken')
const { SECRET } = require("../constants")

const { loginsucceed, loginFailInfo, AddstaffInfo } = require('../prompt/ErrorInfo')
async function UseLogin(ctx, { userName, password }) {
    // 传递给数据库操作接口
    const result = await UseLoginApi({ userName, password })
    let token = jwt.sign({ data: result }, SECRET, { expiresIn: '1h' })
    if (result) {
        // 登录成功返回token和账户信息
        return { result, token, ...loginsucceed }
    } else {
        // 登录失败返回失败
        return { ...loginFailInfo }
    }
}


async function Useegister(ctx, { userName, password, jurisdiction }) {
    // 传递给数据库操作接口
    const result = await registerApi({ userName, password, jurisdiction })
    console.log(result)
    if (result) {
        console.log("注册成功")
    } else {
        console.log("注册失败")
    }
}

// 添加用户
async function UseAddStaff(ctx, staffjur, staffname, staffjob, entrtime) {
    const result = await UseAddStaffApi(staffjur, staffname, entrtime, staffjob)
    if (result) {
        return {
            ...AddstaffInfo,
            result,
        }
    } else {

    }
}

// 员工数据获取
async function UseStaffList(ctx, page, size) {
    const result = await UseStaffListApi(page, size)
    if (result) {
        console.log(result)
        return result
    }
}

module.exports = {
    UseLogin,
    Useegister,
    UseAddStaff,
    UseStaffList
}