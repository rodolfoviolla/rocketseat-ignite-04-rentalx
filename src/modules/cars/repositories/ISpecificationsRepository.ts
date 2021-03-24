import { Specification } from '../entities/Specification';

export interface ICreateSpecification {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create(data: ICreateSpecification): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}
