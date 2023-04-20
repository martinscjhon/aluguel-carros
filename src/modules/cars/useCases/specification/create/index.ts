import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { SpecificationRepository } from "../../../repositories/specifications/SpecificationRepository";
import { CreateSpecificationController } from "../../../../../controller/module/cars/specification";

const categoriesRepository = SpecificationRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(categoriesRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }