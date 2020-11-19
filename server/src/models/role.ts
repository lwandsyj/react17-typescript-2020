import {Model,DataTypes,Sequelize} from 'sequelize'

export interface IRoleAttribute{
    id?:number,
    name:string,
    userId:number,
    createdAt?:Date,
    updatedAt?:Date
}

export class Role extends Model<IRoleAttribute> implements IRoleAttribute{
    id!:number;
    name!:string;
    userId!:number;
    createdAt!:Date;
    updatedAt!:Date;
}

export default (sequelize:Sequelize)=>{
    Role.init({
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            comment:'角色名称'
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            comment:'用户id'
        }
    },{
        tableName:'role',
        sequelize
    });
    return Role
}