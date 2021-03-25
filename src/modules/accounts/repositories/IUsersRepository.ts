import { ICreateUser } from '../dtos/ICreateUser';
import { IUpdateUser } from '../dtos/IUpdateUser';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  update(id: string, data: IUpdateUser): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
