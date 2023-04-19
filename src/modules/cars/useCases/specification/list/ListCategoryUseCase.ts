import { ISpecificationRepository } from "../../../repositories/specifications/ISpecificationRepository"

class ListSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) { }

    execute() {
        const all = this.specificationRepository.list()
        return all
    }
}

export { ListSpecificationUseCase }