import { Specification } from '../entities/Specification';

export interface ICreateSpecification {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create(data: ICreateSpecification): Specification;
  findByName(name: string): Specification;
  list(): Specification[];
}
