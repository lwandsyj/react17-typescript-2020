import DB from '../models'

/**
 * 获取用户列表
 */
export async function getUserAll() {
    return await DB.user.findAll()
}


/**
 * 根据Id 获取用户数据
 */
export async function getUserInfo(params:{id:number,name:string}){
    const where:{id?:number,name?:string}={};
    if(params.id){
        where.id=params.id;
    }
    if(params.name){
        where.name=params.name
    }
    return await DB.user.findOne({
        where
    })
}