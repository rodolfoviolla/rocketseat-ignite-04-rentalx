import { Category } from '../entities/Category';

export interface ICreateCategory {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create(data: ICreateCategory): Promise<Category>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}
