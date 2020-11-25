import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLScalarType } from 'graphql'
import { userController as controller, categoryController as cateController, categoryController } from '../controller'
const timespans={
    createdAt:{
        type:GraphQLString,
        description:'创建时间'
    },
    updatedAt:{
        type:GraphQLString,
        description:'更新时间'
    }
}

const Role = new GraphQLObjectType({
    description:'角色',
    name: 'role',
    fields: {
        id: {
            type: GraphQLInt,
            description:'用户id'
        },
        name: {
            type: GraphQLString,
            description:'角色名称'
        },
        userId: {
            type: GraphQLInt,
            description:'用户id'
        },
        ...timespans
    }
})

const User = new GraphQLObjectType({
    description:'用户',
    name: 'user',
    fields: {
        id: {
            type: GraphQLInt,
            description:'用户id'
        },
        name: {
            type: GraphQLString,
            description:'用户账号'
        },
        password: {
            type: GraphQLString,
            description:'密码'
        },
        ...timespans,
        role:{
            type:Role,
            description:'角色'
        }
    }
})

const Categroy = new GraphQLObjectType({
    description:'分类',
    name: "categroyTree",
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        parentId: {
            type: GraphQLInt
        },
        createdAt: {
            type: GraphQLString
        }
    }
})

const Query = new GraphQLObjectType({
    description:'查询入口',
    name: 'query',
    fields: {
        list: {
            description:'获取用户列表',
            type: new GraphQLList(User),
            resolve(source, item, context, info) {
                return controller.getUserAll()
            }
        },
        userInfo: {
            type: User,
            args: {
                id: {
                    type: GraphQLInt,
                    description: '用户id'
                },
                name:{
                    type:GraphQLString,
                    description:'姓名'
                }
            },
            resolve(source, args) {
                
                return controller.getUserInfo({id:args.id,name:args.name})
            }
        },
        categroy: {
            type: new GraphQLList(Categroy),
            resolve: () => {
                return categoryController.getAll()
            }
        }
    }
});

const mutation=new GraphQLObjectType({
    name:'mutation',
    description:'更新',
    fields:{
        addUser:{
            type:User,
            args:{
                name:{
                    type:GraphQLString,
                },
                password:{
                    type:GraphQLString,
                }
            },
            resolve:(item,args,context,info)=>{
                console.log('args',args)
                console.log(context)
                return {id:1}
            }
        }
    }
})

const sechem = new GraphQLSchema({
    query: Query,
    mutation
})

export default sechem

