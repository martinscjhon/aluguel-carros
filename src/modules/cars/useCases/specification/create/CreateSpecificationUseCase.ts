import { messageError } from "../../../../../helpers/messages/messageError"
import { ISpecificationRepository } from "../../../repositories/specifications/ISpecificationRepository"

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) { }

    execute({ name, description }: IRequest) {
        const isExist = this.specificationRepository.findByName(name)

        if (isExist) {
            throw new Error(messageError.category.exist)
        }

        return this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }