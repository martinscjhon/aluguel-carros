import { Request, Response } from 'express'
import { ListSpecificationUseCase } from './ListCategoryUseCase';

class ListSpecificationController {

    constructor(private listSpecificationUseCase: ListSpecificationUseCase) { }

    handle(request: Request, response: Response) {
        const all = this.listSpecificationUseCase.execute();
        return response.json(all)
    }
}

export { ListSpecificationController }