import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
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
    @Column({ nullable: true })
    name: string;
    @Column({ nullable: true })
    age: number;
    @Column({ nullable: true })
    phoneNumber: number;
    @Column({ nullable: true })
    address: string;
    @Column({ nullable: true })
    salary: number;
    @OneToMany(() => Order,(order) => order.user)
    orders: Order[];
    @OneToOne(() => Store,(store) => store.user)
    store: Store;
 }