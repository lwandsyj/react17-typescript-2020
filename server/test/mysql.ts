import Db from '../models'

// 同步数据
Db.sequelize.sync({force:true, alter:true}).then(res=>{
    console.log(res);
}).catch(reason=>{
    console.log("错误")
})
const {user,category} =Db;

// 测试方法

class UserController {
    static async findAll(){
        return await user.findAll()
    }
}
class Category{
    static async findAll(){
        return await category.findAll();
    }
}
// UserController.findAll().then(res=>{
//     console.log(res)
// })

Category.findAll().then(res=>{
    const list=(JSON.parse(JSON.stringify(res)))
    const item =list[0]
    console.log(item.createdAt)
})