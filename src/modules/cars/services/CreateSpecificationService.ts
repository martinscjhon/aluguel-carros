import { messageError } from "../../../helpers/messages/messageError"
import { ISpecificationRepository } from "../repositories/specifications/ISpecificationRepository"

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) { }

    execute({ name, description }: IRequest) {
        const isExist = this.specificationRepository.findByName(name)

        if (isExist) {
            throw new Error(messageError.specification.exist)
        }

        this.specificationRepository.create({ name, description })
    }


}

export { CreateSpecificationService }