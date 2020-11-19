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
export async function getUserInfo(id:number){
    return await DB.user.findOne({
        where:{
            id
        }
    })
}