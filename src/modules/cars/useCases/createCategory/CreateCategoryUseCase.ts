import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new AppError('Category already exists');
    }

    return this.categoriesRepository.create({ name, description });
  }
}
