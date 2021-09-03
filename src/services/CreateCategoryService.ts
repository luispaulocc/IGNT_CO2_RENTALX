import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
/**
 * [x] - Definir tipo de retorno
 * [x] - Alterar o retorno de error
 * [x] - Acessar o repositorio
 * Retornar algo
 * */

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
