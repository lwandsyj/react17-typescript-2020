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

redis.psetex('str-learn-ex',3000,'hello redis ex 30')
let id= setInterval(function(){
    redis.pttl('str-learn-ex',(err,res)=>{
       if(res<=0){
           clearInterval(id)
       }
       console.log(res)
    })
},500)

redis.set('increment',5);
redis.decrby('increment',3);
redis.get('increment',(err,res)=>{
    console.log('increment',res)
})



