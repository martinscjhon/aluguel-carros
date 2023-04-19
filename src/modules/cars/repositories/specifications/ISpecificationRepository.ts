import { CategoryModel } from "../../model/Category";
import { SpecificationModel } from "../../model/Specification";


interface ISpecificationDTO {
    name: string
    description: string
}

interface ISpecificationRepository {
    findByName(name: string): SpecificationModel;
    list(): SpecificationModel[];
    create({ name, description }: ISpecificationDTO): void
}

export { ISpecificationRepository, ISpecificationDTO }