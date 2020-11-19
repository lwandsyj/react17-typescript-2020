import { readdirSync } from 'fs';
import ioredis from 'ioredis'

let redis = new ioredis({
    host:'127.0.0.1',
    port:6379,
    db:1
})

async function test(){
    console.log('start')
    let goodsInfo = await redis.get('goodsInfo');
    if(goodsInfo){
        return goodsInfo
    }
    let x =await redis.setnx('goodsInfo_view','hello')
    if(x==1){
        console.log(x)
        await redis.set('goodsInfo',JSON.stringify({name:'goods1',id:1,title:'goods-title'}))
        await redis.del('goodsInfo_view')
    }else{
        console.log('else')
        setTimeout(()=>{
            test()
        },100)
    }
}

const key ='hash-learn';
redis.hset(key,'age',12)
redis.hset(key,'sex',1)
redis.hsetnx(key,'sex',0)

redis.hgetall(key).then(res=>{
    console.log(res)
})





