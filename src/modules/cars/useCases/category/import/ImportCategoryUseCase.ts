import { ICategoryRepository } from "../../../repositories/categories/ICategoryRepository"

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) { }

    execute(file: Express.Multer.File) {
       console.log(file, "file")
    }
}

export { ImportCategoryUseCase }