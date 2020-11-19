import DB from '../models'

/**
 * 获取所有分类
 */
export async function getAll() {
    return DB.category.findAll()
}