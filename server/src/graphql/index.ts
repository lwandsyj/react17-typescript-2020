import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLScalarType } from 'graphql'
import { userController as controller, categoryController as cateController, categoryController } from '../controller'
const timespans={
    createdAt:{
        type:GraphQLString
    },
    updatedAt:{
        type:GraphQLString
    }
}

const Role = new GraphQLObjectType({
    name: 'role',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLInt
        },
        ...timespans
    }
})

const User = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        ...timespans,
        role:{
            type:Role
        }
    }
})

const Categroy = new GraphQLObjectType({
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
    name: 'query',
    fields: {
        list: {
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
                }
            },
            resolve(source, args) {
                return controller.getUserInfo(args.id)
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

const sechem = new GraphQLSchema({
    query: Query
})

export default sechem

