import {Request, Response} from "express";
import orderService from "../service/orderService";

class orderController{
    private orderService;
    constructor() {
        this.orderService = orderService
    }

    getOrder = async (req:Request,res:Response) => {
        try {
            let userId = req['decode'].id;
            let foundOrder = await this.orderService.getOrderService(userId);
            console.log(foundOrder)
            res.status(201).json({
                success : true,
                message: 'get order successfully',
                data : foundOrder
            })


        }catch (error){
            res.status(500).json(
                {
                    message: 'error at get Order',
                    error : error,
                    success : false
                }
            )
        }
    }







}
export default new orderController()