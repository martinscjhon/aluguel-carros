
import { CategoryModel } from "../../model/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository"

class CategoryRepository implements ICategoryRepository {
    private categoriesArray: CategoryModel[]

    private static INSTANCE: CategoryRepository;

    private constructor() {
        this.categoriesArray = []
    }

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository()
        } 

        return CategoryRepository.INSTANCE
    }

    create({ name, description }: ICreateCategoryDTO) {
        const category: CategoryModel = new CategoryModel()              

        Object.assign(category, {
            name,
            description,
            created_At: new Date()
        })

        this.categoriesArray.push(category)    
    }

    list() {
        return this.categoriesArray
    }

    findByName(name: string): CategoryModel {
        return this.categoriesArray.find((category) => category.name === name);      
    }
}

export { CategoryRepository }