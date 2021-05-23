const router = require('koa-router')()


const {UseLogin,Useegister} = require('../controller/user')

router.prefix('/api')



router.post('/login', async (ctx, next) => {
  // 拿到登录账号密码
  const { userName, password } = ctx.request.body
  console.log("啊啊啊",userName, password)
  // 调用逻辑处理接口
  ctx.body = await UseLogin(ctx, { userName, password })
})

router.post('/zhuce', async (ctx, next) => {
  // 拿到登录账号密码
  const { userName, password,jurisdiction } = ctx.request.body
  // 调用逻辑处理接口
  ctx.body = await Useegister(ctx, { userName, password,jurisdiction })
})

module.exports = router
