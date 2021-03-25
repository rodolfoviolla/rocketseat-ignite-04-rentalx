import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id, avatar: old_avatar } = request.user;
    const avatar = request.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    const user = await updateUserAvatarUseCase.execute({ user_id, avatar, old_avatar });

    return response.status(200).json(user);
  }
}
