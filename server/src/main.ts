import  Koa,{Context} from 'koa'
import router from './router'
import {validateJwt} from './middelware'
import { nextTick } from 'process';
const app:Koa =new Koa();

app.use(validateJwt("test"));
app.use(async (ctx,next)=>{
    console.log(ctx.state)
    await next()
})
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000)