import { AppError } from '../../../../errors/AppError';
import { CategoriesRepositoryInMemory } from '../../repositories/inMemory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it('should be able to create a new category', async () => {
    const categoryCreated = await createCategoryUseCase.execute({
      name: 'Test Category',
      description: 'Test Category description',
    });

    const categoryFound = await categoriesRepositoryInMemory.findByName(categoryCreated.name);

    expect(categoryFound).toEqual(categoryCreated);
  });

  it('should not be able to create two categories with same name', async () => {
    expect(async () => {
      await createCategoryUseCase.execute({
        name: 'Test Category With Same Name',
        description: 'Test Category description 1',
      });

      await createCategoryUseCase.execute({
        name: 'Test Category With Same Name',
        description: 'Test Category description 2',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
