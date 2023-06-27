import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order";
import {Product} from "./product";

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "bigint", default: 0})
    price: number;
    @Column({type: "bigint", default: 0})
    quantity: number;
    @Column({type: "bigint", default: 0})
    totalPrice: number;
    @ManyToOne(() => Order,(order) => order.orderDetails)
    order: Order;
    @ManyToOne(() => Product,(product) => product.orderDetails)
    product: Product;
}