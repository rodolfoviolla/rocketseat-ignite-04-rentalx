import { Specification } from '../model/Specification';
import {
  ICreateSpecification,
  ISpecificationsRepository,
} from './ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecification): Specification {
    const specification = new Specification(name, description);

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}
