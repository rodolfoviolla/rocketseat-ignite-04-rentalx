import { Category } from '../../entities/Category';
import { ICategoriesRepository, ICreateCategory } from '../ICategoriesRepository';

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async create({ name, description }: ICreateCategory): Promise<Category> {
    const category = new Category();

    category.name = name;
    category.description = description;

    this.categories.push(category);

    return category;
  }
}
