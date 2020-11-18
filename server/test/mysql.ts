import { Model } from 'sequelize';
import Db from '../models'

// 同步数据
// Db.sequelize.sync({force:true, alter:true}).then(res=>{
//     console.log(res);
// }).catch(reason=>{
//     console.log("错误")
// })
const {user,category,role,Role} =Db;

user.hasMany(role,{
    foreignKey:'userId'
})

console.log(role)
console.log(typeof Model)
// 测试方法

class UserController {
    static async findAll(){
        return await user.findAll()
    }
    static async create(model:any) {
        return await user.create(model)
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

async function test() {
    // await UserController.create({
    //     name:'admin',
    //     password:'admin',
    //     phone:'13567896789',
    //     sex:1,
    //     ip:127
    // });
    // await role.create({
    //     name:'管理员',
    //     userId:1
    // });
    user.hasMany(role,{
        foreignKey:'userId'
    })
   let a= await user.findAll({
         include:[{
             model: role as typeof Model,
             attributes:['name','id']
         }]
    })
    console.log(JSON.parse(JSON.stringify(a)))


}

test()