import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1702663100975 implements MigrationInterface {
    name = 'Init1702663100975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("ID" SERIAL NOT NULL, "name" character varying NOT NULL, "Author" character varying NOT NULL, "Year" integer NOT NULL, CONSTRAINT "PK_efd4fe0163bbbc48cfc9af9d895" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "reader" ("ID" SERIAL NOT NULL, "Firstname" character varying NOT NULL, "Lastname" character varying NOT NULL, "Books_taken" integer NOT NULL, CONSTRAINT "PK_11ab0a2d01c7b6020f8e08fe166" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "library" ("Book_Id" SERIAL NOT NULL, "Reader" character varying NOT NULL, "Book_count" integer NOT NULL, CONSTRAINT "PK_ce35c37fced6c5a291cdd8d1457" PRIMARY KEY ("Book_Id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "library"`);
        await queryRunner.query(`DROP TABLE "reader"`);
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
