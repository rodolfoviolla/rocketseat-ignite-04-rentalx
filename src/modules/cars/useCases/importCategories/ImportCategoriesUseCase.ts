import csvParse from 'csv-parse';
import fs from 'fs';

import { Category } from '../../model/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  private loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    const importedCategories: IImportCategory[] = [];
    const stream = fs.createReadStream(file.path);
    const parseFile = stream.pipe(csvParse());

    return new Promise((resolve, reject) => {
      parseFile
        .on('data', ([name, description]) => importedCategories.push({ name, description }))
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(importedCategories);
        })
        .on('error', (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<Category[]> {
    const importedCategories = await this.loadCategories(file);
    const createdCategories: Category[] = [];

    importedCategories.forEach(({ name, description }) => {
      const categoryExists = this.categoriesRepository.findByName(name);

      if (!categoryExists) {
        const category = this.categoriesRepository.create({ name, description });

        createdCategories.push(category);
      }
    });

    return createdCategories;
  }
}
