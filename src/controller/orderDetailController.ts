import {Request, Response} from "express";
import orderDetailService from "../service/orderDetailService";
import orderService from "../service/orderService";


class orderDetailController {
    private orderDetailService;

    constructor() {

        this.orderDetailService = orderDetailService;

    }

    getOrderDetails = async (req: Request, res: Response) => {
            let userId = req['decode'].id;
            let order = await orderService.findOrderByUserId(userId);
            let orderId = order.id;
            res.status(201).json(await orderDetailService.findOrderDetails(orderId))
    }

    getOrderDetailStatusTrue = async (req: Request, res: Response) => {
            let userId = req['decode'].id;
            let order = await orderService.findOrderByUserId(userId);
            let orderId = order.id;
            res.status(201).json(await orderDetailService.findOrderDetailStatusTrue(orderId))
    }
    getOrderDetailPending = async (req: Request, res: Response) => {
            const userId = req['decode'].id;
            const order = await orderService.findOrderByUserId(userId);
            const orderId = order.id;

            res.status(201).json(await orderDetailService.findOrderDetailPending(userId))
    }

    sendOrderDetailPending = async (req: Request, res: Response) => {
            const userId = req['decode'].id;
            await orderDetailService.saveOrderDetailPending(userId);
            res.status(201).json("ok")
    }
    getOrderDetailSuccess = async (req: Request, res: Response) => {
            const userId = req['decode'].id;
            const orderDetails = await orderDetailService.findOrderDetailSuccess(userId)
            res.status(201).json(orderDetails)
    }
    getOrderDetailPendingReceipt = async (req: Request, res: Response) => {
            const storeId = req.body.data;
            console.log("get pending receipt of store:", storeId)
            res.status(201).json(await orderDetailService.findOrderDetailPendingReceipt(storeId));
    }
    getOrderDetailConfirmedReceipt = async (req: Request, res: Response) => {
            const storeId = req.params.id;
            let orderDetails = await orderDetailService.findOrderDetailConfirmedReceipt(storeId);
            res.status(201).json(orderDetails)
    }
    updateOrderDetailPendingReceipt = async (req: Request, res: Response) => {
            console.log("orderDetail to comfirm:", req.body['orderDetail'])
            await orderDetailService.updateOrderDetailPendingReceipt(req.body['orderDetail'])
            res.status(201).json("ok")
    }
}

export default new orderDetailController();

