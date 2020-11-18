import { Model, DataTypes, Sequelize } from 'sequelize'

// id，createdAt和updatedAt是可选的。这是因为在创建模型的新实例时，我们不想
//被迫指定这些字段。相反，我们通常希望Sequelize自动设置它们。


interface UserAttributes {
    id?: number,
    name: string,
    password: string,
    phone: string,
    sex: number,
    ip: string,
    lastLoginTime: Date,
    createdAt?: Date,
    updatedAt?: Date
}

// 第二种模型为ModelInstance 
//这代表实际数据库行的Sequelize实例。
//例如，函数User.find({ id: 1 })返回User模型的实例。
//这将有ModelAttributes我们定义（即表列）以及更Sequelize实例方法，如.validate，.save，.update，等等。对于Users，接口定义如下。
class User extends Model<UserAttributes>
    implements UserAttributes {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    name!: string;
    password!: string;
    phone!: string;
    sex!: number;
    ip!: string;
    lastLoginTime!: Date;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

export default (sequelize:Sequelize)=>{
    let a= User.init(
        {
           
            name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            password: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            phone: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            sex: {
                type: new DataTypes.INTEGER,
                allowNull: true,
                defaultValue:1
            },
            ip: {
                type: new DataTypes.INTEGER,
                allowNull: true,
            },
            lastLoginTime: {
                type: new DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            tableName: "user",
            sequelize, // passing the `sequelize` instance is required
        }
    );
    console.log(User);
    return User
}
