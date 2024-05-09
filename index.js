const koa = require('koa')
const Router = require('koa-router')
const mockList=require('./mock/index')

const app =new koa()
const router = new Router()

async function getRes(fn,ctx){
  return new Promise(resolve=>{
    setTimeout(()=>{
      const res = fn(ctx)
      resolve(res)
    },1000)
  })
}

// 注册mock路由
mockList.forEach(item=>{
  const {url,method,response}=item
  router[method](url,async ctx=>{
    //ctx context 上下文
    const res = await getRes(response,ctx) //模拟网络请求的加载状态，1s
    ctx.body = res
  })
  //router.get
})

app.use(router.routes())
app.listen(3001) //port端口