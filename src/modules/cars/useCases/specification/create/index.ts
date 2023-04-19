

import { CreateSpecificationController } from "./SpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { SpecificationRepository } from "../../../repositories/specifications/SpecificationRepository";

const categoriesRepository = SpecificationRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(categoriesRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }