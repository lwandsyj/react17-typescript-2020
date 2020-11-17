import {Context,Next,Request} from 'koa'
export async function name(ctx:Context,next:Next) {
    let a:Request;
    a=ctx.request;
    ctx.body=a.query;
}