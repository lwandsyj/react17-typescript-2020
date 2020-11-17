import KoaRouter from 'koa-router'


const router:KoaRouter =new KoaRouter({
    prefix:'/api'
});

router.get('/', async (ctx,next)=>{
    ctx.body=ctx.request.query;
});

router.get('/:id', async (ctx,next)=>{
    ctx.body=ctx.params;
});

router.post('/:id', async (ctx,next)=>{
    ctx.body=ctx.body;
});

router.all("/", async (ctx,next)=>{
    ctx.body={
        code:10004,
        msg:'您请求的接口不存在'
    }
})

export default router;