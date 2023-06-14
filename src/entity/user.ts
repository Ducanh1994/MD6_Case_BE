import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Order} from "./order";
import {Store} from "./store";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique:true})
    username: string;
    @Column({unique:true})
    email: string;
    @Column()
    password: string;
    @Column({default:'user'})
    role: string;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column()
    phoneNumber: number;
    @Column()
    address: string;
    @Column()
    salary: number;
    @OneToMany(() => Order,(order) => order.user)
    orders: Order[];
    @OneToOne(() => Store,(store) => store.user)
    store: Store;
 }