import { Router, Request, Response } from "express";
import { createSpecificationController } from "../modules/cars/useCases/specification/create";
import { listSpecificationController } from "../modules/cars/useCases/specification/list";

const specificationRoutes = Router();

specificationRoutes.post('/', (request: Request, response: Response) => {
    return createSpecificationController.handle(request, response);
})

specificationRoutes.get('/', (request: Request, response: Response) => {
    return listSpecificationController.handle(request, response);
})


export { specificationRoutes }