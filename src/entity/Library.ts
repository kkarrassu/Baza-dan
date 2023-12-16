import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Library {

    @PrimaryGeneratedColumn()
    Book_Id: number;

    @Column()
    Reader: string;

    @Column()
    Book_count: number;
}