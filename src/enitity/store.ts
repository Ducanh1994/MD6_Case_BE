import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./user";
import {Product} from "./product";
@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column("longtext")
    avatar: string;
    @Column()
    address: string;
    @OneToMany(() => Product,(product) => product.store)
    products: Product[];
    @OneToOne(() => User,(user) => user.store)
    user: User;
}