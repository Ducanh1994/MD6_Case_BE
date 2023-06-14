import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123",
    database: "test_c122",
    synchronize: true,
    entities: ["dist/src/entity/*.js"],
})
