import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    name: string;

    @Column()
    Author: string;

    @Column()
    Year: number;
}