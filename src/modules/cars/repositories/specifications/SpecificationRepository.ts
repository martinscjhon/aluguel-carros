
import { SpecificationModel } from "../../model/Specification"
import { ISpecificationRepository, ISpecificationDTO } from "./ISpecificationRepository"

class SpecificationRepository implements ISpecificationRepository {
    private specificationsArray: SpecificationModel[]

    private static INSTANCE: SpecificationRepository

    private constructor() {
        this.specificationsArray = []
    }

    public static getInstance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository()
        }

        return SpecificationRepository.INSTANCE
    }


    create({ name, description }: ISpecificationDTO) {
        const category: SpecificationModel = new SpecificationModel()

        Object.assign(category, {
            name,
            description,
            created_At: new Date()
        })

        this.specificationsArray.push(category)
    }

    list() {
        return this.specificationsArray
    }

    findByName(name: string): SpecificationModel {
        return this.specificationsArray.find((specification) => specification.name === name);
    }
}

export { SpecificationRepository }