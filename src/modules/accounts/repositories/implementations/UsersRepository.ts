import { getRepository, Repository } from 'typeorm';

import { ICreateUser } from '../../dtos/ICreateUser';
import { IUpdateUser } from '../../dtos/IUpdateUser';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, password, email, driver_license }: ICreateUser): Promise<User> {
    const user = this.repository.create({ name, password, email, driver_license });

    return this.repository.save(user);
  }

  async update(id: string, { name, email, password, driver_license, is_admin, avatar }: IUpdateUser): Promise<User> {
    return this.repository.save({ id, name, email, password, driver_license, is_admin, avatar });
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOne(id);
  }
}
