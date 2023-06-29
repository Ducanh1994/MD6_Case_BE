import {AppDataSource} from "../data-source";
import {OrderDetail} from "../entity/orderDetail";



class orderDetailService {
    private orderDetailRepository;

    constructor() {
        this.orderDetailRepository = AppDataSource.getRepository(OrderDetail);
    }
    addOrderDetail = async (orderId, product) => {
        let existOrderDetails = await this.orderDetailRepository.find({
            where: {
                order: {
                    id: orderId
                },
                product: {
                    id: product.id
                }
            },
        });


        if (existOrderDetails[0]) {
            await this.orderDetailRepository
                .createQueryBuilder()
                .update(OrderDetail)
                .set({
                    price: product.price,
                    quantity: existOrderDetails[0].quantity + product.quantity,
                    totalPrice: product.price * (existOrderDetails[0].quantity + product.quantity),
                    order: orderId,
                    product: product.id,
                    status: product.status
                })
                .where({order: orderId, product: product.id})
                .execute()
        } else {
            let newOrderDetail = {
                price: product.price,
                quantity: product.quantity,
                totalPrice: product.price * product.quantity,
                order: orderId,
                product: product.id,
                status: product.status
            }
            await this.orderDetailRepository.save(newOrderDetail);
        }
    }
    findOrderDetails = async (orderId) => {
       return await this.orderDetailRepository.find({
            relations: [
                'order','product','product.category'
            ],
            where: {
                order: {
                    id: orderId,
                    status: "unpaid"
                },
            },
        })
    }
    findOrderDetailStatusTrue = async (orderId) => {
        return await this.orderDetailRepository.find({
            relations: [
                'order','product','product.category'
            ],
            where: {
                status:true,
                order: {
                    id: orderId,
                    status: "unpaid"
                },
            },
        })
    }
    findOrderDetailPending = async (orderId) => {
        return await this.orderDetailRepository.find({
            relations: [
                'order','product','product.category'
            ],
            where: {
                status:true,
                statusBill : "pending",
                order: {
                    id: orderId
                },
            },
        })
    }
    changeStatusBill = async (orderId) => {
        return await this.orderDetailRepository
            .createQueryBuilder()
            .update(OrderDetail)
            .set({
                statusBill : "pending"
            })
            .where({
                    status: true,
                    statusBill: "unpaid",
                    order: {
                        id: orderId
                    }
                })
            .execute()
    }
    findOrderDetailPendingReceipt = async (storeId) => {
        return await this.orderDetailRepository.find({
            relations: [
                'order','product','product.category','product.store'
            ],
            where: {
                status:true,
                statusBill : "pending",
                product: {
                    store: {
                        id: storeId
                    }
                }
            },
        })
    }
    updateOrderDetailPendingReceipt = async (orderId,storeId,productId) => {
        console.log('trying to paid',orderId,productId)

        return await this.orderDetailRepository
            .createQueryBuilder()
            .update(OrderDetail)
            .set({
                statusBill : "paid"
            })
            .where({
                status: true,
                statusBill: "pending",
                product: {
                    id: productId,
                },
                order: {
                    id: orderId
                }
            })
            .execute()
    }

    getOrderDetailByIdService = async (orderDetailId) => {
        try {
            let orderDetail = await this.orderDetailRepository.findOne({
                where: {
                    id: orderDetailId
                }
            });
            return orderDetail;
        } catch (error) {
            console.log(`Error at finding Order detail by id service: ${error}`);
        }
    };


    getOrderDetailsByOrderId = async (orderId) =>{
        try{
          let orderDetails = await this.orderDetailRepository.find({
              relations: {
                  order: true
              },
              where:{
                    order: {
                        id: orderId
                    }
                }
            })
            return orderDetails;
        }catch(error){
            console.log(error + 'at find OrderDetails service')
        }
    }

    updateOrderDetailByIdService = async (orderDetailId, updateQuantity, price) =>{
        try{
            await this.orderDetailRepository.update({id: orderDetailId}, {quantity:updateQuantity, totalPrice: updateQuantity * price})
        }catch(error){
            console.log(error + 'at update quantity of order detail service')
        }
    }


    deleteOrderDetailService = async (orderDetailId) =>{
        try{
            await this.orderDetailRepository.delete({id: orderDetailId})
        }catch(error){
            console.log(error + 'at delete order detail service')
        }
    }










}

export default new orderDetailService();