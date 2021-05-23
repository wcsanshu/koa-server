// const Blog = require('./blog')
//出口
// 注册的用户表格
const User = require('./user')

// 用户管理表格
const staff = require('./staff')
//  const AnwserRelation =require('./AnswerRelation')

// 查询问题信息时顺便带出用户信息 连表查询
// Blog.belongsTo(User,{
//     foreignKey:'userId'
// })

// // 查询问题数据的时候 利用 blog表格里的userid 去查询出 id 也就是问题id
// //然后利用id 去answerRealation 表格里 对应问题id 查出相应的信息
// // Blog.belongsTo(AnwserRelation,{
// //     foreignKey:'id', //blog表里的问题id
// //     targetKey:'questionId' //去对应 回复表格里的 问题id
// // })


// // 查询回复信息的时候 顺便查出 回复用户的 信息 (昵称 头像等)
// AnwserRelation.belongsTo(User,{
//     foreignKey:'commentuserId'
// })



//UserRelation 为 用户关注信息表格 

// 传参 为userid 也就是自己的id或者其他人的id
//followerId为被关注的用户
//userId为粉丝id
// 通过 UserRelation 表格里的userId 来查询出 所有的 followerId (查询用户关注的用户的id)
// 然后followerId 作为 外键  去user表格里 里面查询信息  (followerId 对应user表格里的id)
// 最后实现 查询我或者其他用户都关注了谁 
// UserRelation.belongsTo(User, {
//     foreignKey: 'followerId' 
// })




// // 通过 floowId 来查询出 所有的 userId
// // 然后利用userId 作为外键 去user表格里查询 对应的id 查询出id信息 
// // 最后 实现 查询哪些人关注了我
// User.hasMany(UserRelation, {
//     foreignKey: 'userId'
// })



module.exports = {
    User,
    staff
}