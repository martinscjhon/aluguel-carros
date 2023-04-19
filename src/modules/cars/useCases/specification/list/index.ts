

import { SpecificationRepository } from "../../../repositories/specifications/SpecificationRepository"
import { ListSpecificationController } from "./ListCategoryController"
import { ListSpecificationUseCase } from "./ListCategoryUseCase"

const specificationRepository = SpecificationRepository.getInstance()
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository)
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase)

export { listSpecificationController }