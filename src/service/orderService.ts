import {AppDataSource} from "../data-source";
import {Order} from "../entity/order";


class orderService {
    private OrderRepository;

    constructor() {
        this.OrderRepository = AppDataSource.getRepository(Order);
    }

    getOrderService = async (userId) =>{
        try{
            let foundOrder = await this.OrderRepository.findOne({
                relations: ['orderDetails', 'orderDetails.product', 'orderDetails.product.category'],
                where:{
                    user:{
                        id: userId
                    },
                    status: 'unpaid'
                }
            })
            return foundOrder;
        }catch(error){
            console.log(error + 'at find Order service')
        }
    }


}

export default new orderService();