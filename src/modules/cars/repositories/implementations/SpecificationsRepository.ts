import { getRepository, Repository } from 'typeorm';

import { Specification } from '../../entities/Specification';
import { ICreateSpecification, ISpecificationsRepository } from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecification): Promise<Specification> {
    const specification = this.repository.create({ name, description });

    return this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    return this.repository.findOne({ name });
  }

  async list(): Promise<Specification[]> {
    return this.repository.find();
  }
}
