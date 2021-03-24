import { ICreateUser } from '../dtos/ICreateUser';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
