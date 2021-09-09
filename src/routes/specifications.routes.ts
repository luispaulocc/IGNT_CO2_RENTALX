import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();
// const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

/*
specificationsRoutes.get("/", (request, response) => {
    const all = specificationsRepository.list();

    return response.status(201).json(all).send();
});
*/
export { specificationsRoutes };
