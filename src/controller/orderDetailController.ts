import {Request, Response} from "express";
import orderDetailService from "../service/orderDetailService";
import orderService from "../service/orderService";



class orderDetailController {
    private orderDetailService;

    constructor() {

        this.orderDetailService = orderDetailService;

    }

    getOrderDetails = async (req: Request, res: Response) => {
        try {
            let userId = req['decode'].id;
            let order = await orderService.findOrderByUserId(userId);
            let orderId = order.id;
            res.status(201).json(await orderDetailService.findOrderDetails(orderId))
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }

    getOrderDetailStatusTrue = async (req: Request, res: Response) => {
        try {
            let userId = req['decode'].id;
            let order = await orderService.findOrderByUserId(userId);
            let orderId = order.id;
            res.status(201).json(await orderDetailService.findOrderDetailStatusTrue(orderId))
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }
    getOrderDetailPending = async (req: Request, res: Response) => {
        try {
            let userId = req['decode'].id;
            let order = await orderService.findOrderByUserId(userId);
            let orderId = order.id;
            await orderDetailService.changeStatusBill(orderId);
            res.status(201).json(await orderDetailService.findOrderDetailPending(orderId))
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }
}
export default new orderDetailController();

