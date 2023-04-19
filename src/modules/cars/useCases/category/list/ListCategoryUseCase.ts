import { ICategoryRepository } from "../../../repositories/categories/ICategoryRepository"

class ListCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) { }

    execute() {
        const all = this.categoriesRepository.list()
        return all
    }
}

export { ListCategoryUseCase }