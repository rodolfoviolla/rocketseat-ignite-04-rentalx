import { inject, injectable } from 'tsyringe';

import { deleteFile } from '../../../../utils/file';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  old_avatar: string;
  avatar: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar, old_avatar }: IRequest): Promise<User> {
    if (old_avatar) {
      await deleteFile(`./tmp/avatar/${old_avatar}`);
    }

    return this.usersRepository.update(user_id, { avatar });
  }
}
