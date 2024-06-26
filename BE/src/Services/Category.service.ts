import { ConflictError, ResourceNotFoundError } from "../cores/error.response"
import Category from "../models/Category.model"
import { validate } from "../schemas"
import categorySchema from "../schemas/category.schema"


export class CategoryService {
    static async create({ category_name, category_thumb }: {
        category_name: string,
        category_thumb?: string
    }) {
        validate(categorySchema, { category_name })
        const foundCategory = await Category.findOne({ category_name })
        if (foundCategory) throw new ConflictError("this category already exists")

        const newCategory = await Category.create({ category_name, category_thumb })

        return newCategory
    }
    static async getOne({ id }: { id: string }) {
        const foundCategory = await Category.findOne({ _id: id })
        if (!foundCategory) throw new ResourceNotFoundError("this category not found")
        return foundCategory
    }
    static async getAll({ page, limit }: { page: number, limit: number }) {

        const skip = (page - 1) * limit

        const categories = await Category.find({}).skip(skip).limit(limit).lean()
        return categories
    }
    static async update({ id, category_name, category_thumb }: {
        id: string,
        category_name?: string,
        category_thumb?: string
    }) {
        const foundCategory = await Category.findOne({ _id: id })
        if (!foundCategory) throw new ResourceNotFoundError("this category not found")
        if (category_name) foundCategory.category_name = category_name
        if (category_thumb) foundCategory.category_thumb = category_thumb
        await foundCategory.save()
        return foundCategory
    }
    static async delete({ id }: { id: string }) {
        const foundCategory = await Category.findOne({ _id: id })
        if (!foundCategory) throw new ResourceNotFoundError("this category not found")
        return await Category.deleteOne({ _id: id })
    }
}
