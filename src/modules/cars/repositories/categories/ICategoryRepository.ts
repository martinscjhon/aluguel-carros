import { CategoryModel } from "../../model/Category";


interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoryRepository {
    findByName(name: string): CategoryModel;
    list(): CategoryModel[];
    create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoryRepository, ICreateCategoryDTO }