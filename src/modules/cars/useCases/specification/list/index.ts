import { ListSpecificationController } from "../../../../../controller/module/cars/specification"
import { SpecificationRepository } from "../../../repositories/specifications/SpecificationRepository"
import { ListSpecificationUseCase } from "./ListCategoryUseCase"

const specificationRepository = SpecificationRepository.getInstance()
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository)
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase)

export { listSpecificationController }