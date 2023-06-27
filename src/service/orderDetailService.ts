import {AppDataSource} from "../data-source";
import {OrderDetail} from "../entity/orderDetail";



class orderDetailService {
    private OrderDetailRepository;

    constructor() {
        this.OrderDetailRepository = AppDataSource.getRepository(OrderDetail);
    }

    getOrderDetailByIdService = async (orderDetailId) => {
        try {
            let orderDetail = await this.OrderDetailRepository.findOne({
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
          let orderDetails = await this.OrderDetailRepository.find({
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
            await this.OrderDetailRepository.update({id: orderDetailId}, {quantity:updateQuantity, totalPrice: updateQuantity * price})
        }catch(error){
            console.log(error + 'at update quantity of order detail service')
        }
    }


    deleteOrderDetailService = async (orderDetailId) =>{
        try{
            await this.OrderDetailRepository.delete({id: orderDetailId})
        }catch(error){
            console.log(error + 'at delete order detail service')
        }
    }










}

export default new orderDetailService();