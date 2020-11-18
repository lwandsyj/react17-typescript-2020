import Db from '../models'

// 同步数据
// Db.sequelize.sync({alter:true}).then(res=>{
//     console.log(res);
// }).catch(reason=>{
//     console.log("错误")
// })
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
    const list:Category[]=(JSON.parse(JSON.stringify(res)))
    const item:Category =list[0]
    console.log(item.id)
})