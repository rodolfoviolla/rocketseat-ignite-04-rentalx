import { Category } from '../model/Category';

export interface ICreateCategory {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create(data: ICreateCategory): Category;
  list(): Category[];
  findByName(name: string): Category;
}
