import {Model,DataType, DataTypes, Sequelize} from 'sequelize'

interface CategoryAttributes{
    id?:number;
    name:string;
    parentId:number;
    code:string;
    order:number;
    createdAt?:Date;
    updatedAt:Date;
}

class Category extends Model{
    id!:number;
    name!:string;
    parentId!:number;
    code!:string;
    order!:number;
}

export default (sequelize:Sequelize)=>{
    Category.init({
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            comment:'分类名称'
        },
        parentId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            comment:'父类id'
        },
        code:{
            type:DataTypes.STRING,
            allowNull:false,
            comment:'分类编码'
        },
        order:{
            type:DataTypes.INTEGER,
            allowNull:false,
            comment:'排序'
        }
    },{
        tableName:'',
        sequelize
    });
    return Category
}
