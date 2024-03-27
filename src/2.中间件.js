// 一、引入Koa实例
import Koa from 'koa'
// 二、注册app
const app = new Koa()


// 三、注册中间件(可以链式调用)
// 🧅洋葱圈模型(1 -> 3 -> 5 -> 4 -> 2)
app.use((ctx, next) => {
    console.log("1")
    next()
    console.log("2")
}).use(async (ctx, next) => {
    // async await
    // const res = await '3'
    const res = await new Promise((resolve) => {
        resolve('3')
    })
    console.log(res)
    next()
    console.log("4")
}).use((ctx) => {
    console.log("5")
    ctx.body = '💙💛组装完成'
}).listen(3002, () => {
    // 四、监听
    console.log("💙💛server is running on http://localhost:3002")
})





