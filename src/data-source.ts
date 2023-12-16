import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: ["./src/entity/*.ts"], // add your Entity here
    migrations: ["./src/migration/**/*.ts"],
    subscribers: [],
})
