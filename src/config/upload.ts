import crypto from 'crypto';
import multer, { Options } from 'multer';
import { resolve } from 'path';

export default {
  upload: (folder: string): Options => ({
    storage: multer.diskStorage({
      destination: resolve(__dirname, '..', '..', folder),
      filename: (request, file, callback) => {
        return callback(null, `${crypto.randomBytes(16).toString('hex')}-${file.originalname}`);
      },
    }),
  }),
};
