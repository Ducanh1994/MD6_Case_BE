import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    name: string;
    @Column({type:"longtext"})
    image: string;
    @OneToMany (() => Product, (product) => product.category)
    products: Product[]
}