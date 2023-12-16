import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Reader {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Firstname: string;

    @Column()
    Lastname: string;

    @Column()
    Books_taken: number;
}