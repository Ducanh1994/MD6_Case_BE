import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./user";
import {Product} from "./product";
import {StoreType} from "./storeType";
import {JoinColumn} from "typeorm/browser";
@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column("longtext")
    avatar: string;
    @Column()
    email: string;
    @Column()
    origin: string;
    @Column()
    country: string;
    @Column()
    telephone: string;
    @Column()
    address: string;
    @OneToMany(() => Product,(product) => product.store)
    products: Product[];
    @OneToOne(() => User,(user) => user.store)
    user: User;
    @ManyToOne(() => StoreType,(storeType) => storeType.store)
    storeType: StoreType;
}