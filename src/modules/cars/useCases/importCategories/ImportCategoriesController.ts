import { Request, Response } from 'express';

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

export class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const categories = await this.importCategoriesUseCase.execute(file);

    return response.json(categories);
  }
}
