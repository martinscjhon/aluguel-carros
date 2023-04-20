import { Request, Response } from 'express'
import { CreateCategoryUseCase } from '../../../../modules/cars/useCases/category/create/CreateCategoryUseCase';
import { ListCategoryUseCase } from '../../../../modules/cars/useCases/category/list/ListCategoryUseCase';
import { ImportCategoryUseCase } from '../../../../modules/cars/useCases/category/upload/ImportCategoryUseCase';

export class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });

        return response.status(201).send()
    }
}

export class ListCategoryController {

    constructor(private listCategoryUseCase: ListCategoryUseCase) { }

    handle(request: Request, response: Response) {
        const all = this.listCategoryUseCase.execute();
        return response.json(all)
    }
}

export class ImportCategoryController {

    constructor(private importCategoryUseCase: ImportCategoryUseCase) { }

    handle(request: Request, response: Response) {
        const { file } = request;

        this.importCategoryUseCase.execute(file)

        return response.send()
    }
}
