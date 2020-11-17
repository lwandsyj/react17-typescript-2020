import KoaRouter from 'koa-router'


const router:KoaRouter =new KoaRouter({
    prefix:'/api'
});

router.get('/', async (ctx,next)=>{
    ctx.body="hello koa-typescript nodemon"
})

export default router;