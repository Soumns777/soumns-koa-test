// 一、导入Koa包
import Koa from 'koa'

// 二、实例化ap对象
const app = new Koa();

// 三、编写中间件
app.use(ctx => {
    ctx.body = 'hello word'
})

// 四、启动服务,监听3002端口
app.listen(3002, () => {
    console.log("💙💛server is running on http://localhost:3002")
})

