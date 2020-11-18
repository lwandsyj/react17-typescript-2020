import {Sequelize} from 'sequelize'
import CreateUser from './user'
import CreateCategory from './category'
import CreateRole,{Role,IRoleAttribute} from './role'

let sequelize = new Sequelize({
    dialect: 'mysql', // 数据库类型
    database:'test', // 数据库名称
    username:'root',// 连接数据库用户名
    password:'',// 数据库密码
    host:'127.0.0.1',// 数据库地址
    port:3306,// 数据库端口
    define:{
        charset:'utf8mb4'
    },
    dialectOptions:{
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true,
        dateStrings:true,
        typeCast:true,
        connectTimeout:20000// 毫秒
    }
})

export default {
    sequelize,
    Sequelize,
    user:CreateUser(sequelize),
    category:CreateCategory(sequelize),
    role:CreateRole(sequelize),
    Role
}
