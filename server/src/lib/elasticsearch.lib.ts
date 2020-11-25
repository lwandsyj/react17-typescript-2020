import {Client} from '@elastic/elasticsearch'

const client = new Client({
    node:'http://localhost:9200',// 服务器地址
   
    requestTimeout:1000,// 请求超时

})

async function run () {
    const res = await client.indices.create({
        index:'goods-category'
    })
    console.log(res)
  }
  
  run().catch(console.log)