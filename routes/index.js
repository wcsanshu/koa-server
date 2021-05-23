const router = require('koa-router')()
router.prefix('/api')
const { UseAddStaff, UseStaffList } = require('../controller/user')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

// 新增员工数据
router.post('/staff', async (ctx, next) => {
  const { staffjur, staffname, staffjob, entrtime } = ctx.request.body
  console.log(entrtime)
  const dateTime = entrtime.split('T',[1])
  ctx.body = await UseAddStaff(ctx, staffjur, staffname, staffjob, ...dateTime)
})


// 获取员工管理数据
router.get('/stafflist/:page', async (ctx, next) => {
  console.log("查询")
  const { page, size } = ctx.params
  const pagesize = parseInt(page)
  ctx.body = await UseStaffList(ctx, pagesize, size)
})




module.exports = router
