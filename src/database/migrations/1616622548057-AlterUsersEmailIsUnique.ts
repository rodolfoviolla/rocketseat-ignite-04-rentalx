import { MigrationInterface, QueryRunner, TableUnique } from 'typeorm';

export class AlterUsersEmailIsUnique1616622548057 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createUniqueConstraint(
      'users',
      new TableUnique({
        columnNames: ['email'],
        name: 'emailIsUnique',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropUniqueConstraint('users', 'emailIsUnique');
  }
}
