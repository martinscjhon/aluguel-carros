import { Router, Request, Response } from "express";
import { createCategoryController } from "../modules/cars/useCases/category/create";
import { listCategoryController } from "../modules/cars/useCases/category/list";


const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
    return listCategoryController.handle(request, response)
})


export { categoriesRoutes }