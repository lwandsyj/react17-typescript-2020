import Koa from 'koa'
import router from './router'
import path from 'path'
import koaBody from 'koa-body';
import StaticCache from 'koa-static-cache'
import {ApolloServer} from 'apollo-server-koa'
import schema from './graphql'
const app = new Koa();

app.use(async (ctx,next)=>{
    console.log('start')
    await next();
    console.log('ctx',ctx.body)
    // ctx.body={
    //     code:10000,
    //     msg:'',
    //     data:ctx.body
    // }
})

const graphqlServer = new ApolloServer({
    schema,
    debug:true,
    tracing:true,
    context:(context)=>{
        return context
    }
})
graphqlServer.applyMiddleware({app});
app.use(StaticCache({
    dir: path.join(__dirname, '../static'),
    prefix: '/static'
}));

app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname, '../public/upload')
    }
}));

app.use(router.routes());
app.use(router.allowedMethods());

// 处理路由写错地址或者请求方式，或者不存在的路由
app.use(async (ctx) => {
    ctx.body = {
        code: 1004,
        msg: '路由不存在'
    }
});
app.listen(4000, () => {
    console.log('start at 4000')
});