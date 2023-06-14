import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Order} from "./order";
import {Store} from "./store";

@Entity()
//Some attributes can't be empty and can only exist once. Use Unique and Nullable
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:"varchar", unique:true, nullable: false})
    username: string;
    @Column({type:"varchar", unique:true, nullable:false})
    email: string;
    @Column({type:"varchar", default:'123456@Abc', nullable:false})
    password: string;
    @Column({type:"varchar", default:'user', nullable: false})
    role: string;
    @Column({type:"varchar", nullable:false})
    name: string;
    @Column({type:"varchar", nullable:false})
    age: number;
    @Column({type: "varchar",nullable:true})
    phoneNumber: number;
    @Column({type:"varchar", nullable:true})
    address: string;
    @Column({type:"varchar", nullable: true})
    salary: number;
    @OneToMany(() => Order,(order) => order.user)
    orders: Order[];
    @OneToOne(() => Store,(store) => store.user)
    store: Store;
}