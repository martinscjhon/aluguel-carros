import { CreateSpecificationUseCase } from "../../../../modules/cars/useCases/specification/create/CreateSpecificationUseCase";
import { Request, Response } from 'express'
import { ListSpecificationUseCase } from "../../../../modules/cars/useCases/specification/list/ListCategoryUseCase";

export class CreateSpecificationController {

    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({ name, description });

        return response.status(201).send()
    }
}

export class ListSpecificationController {

    constructor(private listSpecificationUseCase: ListSpecificationUseCase) { }

    handle(request: Request, response: Response) {
        const all = this.listSpecificationUseCase.execute();
        return response.json(all)
    }
}
