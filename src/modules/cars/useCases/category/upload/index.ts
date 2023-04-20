import { ImportCategoryController } from "../../../../../controller/module/cars/category"
import { CategoryRepository } from "../../../repositories/categories/CategoryRepository"
import { ImportCategoryUseCase } from "./ImportCategoryUseCase"

const categoryRepository = CategoryRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }