import { messageError } from "../../../../../helpers/messages/messageError"
import { ICategoryRepository } from "../../../repositories/categories/ICategoryRepository"


interface IRequest {
    name: string
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) { }

    execute({ name, description }: IRequest) {
        const isExist = this.categoriesRepository.findByName(name)

        if (isExist) {
            throw new Error(messageError.category.exist)
        }

        return this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }