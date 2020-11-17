import Koa from 'koa'
export function validateJwt(prefix:string){
    return async function (ctx:Koa.Context,next:Koa.Next){
        ctx.state.prefix=prefix;
        await next();
    }
}