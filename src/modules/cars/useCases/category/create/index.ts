import { CreateCategoryController } from "../../../../../controller/module/cars/category";
import { CategoryRepository } from "../../../repositories/categories/CategoryRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoryRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }