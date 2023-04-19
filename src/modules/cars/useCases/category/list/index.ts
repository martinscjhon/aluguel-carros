
import { CategoryRepository } from "../../../repositories/categories/CategoryRepository"
import { ListCategoryController } from "./ListCategoryController"
import { ListCategoryUseCase } from "./ListCategoryUseCase"

const categoriesRepository = CategoryRepository.getInstance()
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase)

export { listCategoryController }