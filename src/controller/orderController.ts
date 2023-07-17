import {Request, Response} from "express";
import orderService from "../service/orderService";
import orderDetailService from "../service/orderDetailService";
import productService from "../service/productService";


class orderController {
    private orderService;
    private orderDetailService;
    private productService;

    constructor() {
        this.orderService = orderService;
        this.orderDetailService = orderDetailService;
        this.productService = productService;
    }

    getOrder = async (req: Request, res: Response) => {
        let userId = req['decode'].id;
        let foundOrder = await this.orderService.getOrderService(userId);
        res.status(201).json({
            success: true,
            message: 'get order successfully',
            data: foundOrder
        })
    }


    getTotalMoney = async (orderDetails) => {
        let totalMoney = 0
        for await (let orderDetail of orderDetails) {
            let price = orderDetail.price;
            let quantity = orderDetail.quantity;
            totalMoney += price * quantity;
        }
        return totalMoney
    }

    updateProductQuantity = async (check, productId, oldProduct) => {
        if (check) {
            await productService.updateProductQuantityService(productId, parseInt(oldProduct.quantity) - 1);
        } else {
            await productService.updateProductQuantityService(productId, parseInt(oldProduct.quantity) + 1);
        }
    }

    updateTotalMoney = async (orderId) => {
        let orderDetails = await this.orderDetailService.getOrderDetailsByOrderId(orderId);
        let totalMoney = await this.getTotalMoney(orderDetails)
        await this.orderService.updateOrderTotalMoney(orderId, totalMoney);
    }


    changeOrderDetailQuantity = async (req: Request, res: Response) => {
        let userId = req['decode'].id;
        let orderId = req.params.orderId;
        let orderDetailId = req.params.orderDetailId;
        let price = req.body.price;
        let updateQuantity = req.body.quantity;
        let productId = req.body.productId;
        let oldOrderDetail = await this.orderDetailService.getOrderDetailByIdService(orderDetailId);
        let oldQuantity = oldOrderDetail.quantity;
        let oldProduct = await this.productService.getOneProductById(productId);

        let check = oldQuantity < updateQuantity;
        await this.updateProductQuantity(check, productId, oldProduct)
        await this.orderDetailService.updateOrderDetailByIdService(orderDetailId, updateQuantity, price);


        await this.updateTotalMoney(orderId)

        let foundOrder = await this.orderService.getOrderService(userId);
        res.status(201).json({
            success: true,
            message: 'change order quantity successfully',
            data: foundOrder
        })
    }


    changeOrderDetailQuantityByInput = async (req: Request, res: Response) => {
        let userId = req['decode'].id;
        let orderDetailId = req.params.orderDetailId;
        let orderId = req.params.orderId;
        let {quantity, productId, price} = req.body
        let oldOrderDetail = await this.orderDetailService.getOrderDetailByIdService(orderDetailId);
        let oldProduct = await this.productService.getOneProductById(productId);
        let updateOrderDetailQuantity = quantity - oldOrderDetail.quantity;
        let updateProductQuantity = oldProduct.quantity - updateOrderDetailQuantity;


        await this.orderDetailService.updateOrderDetailByIdService(orderDetailId, quantity, price);
        await this.productService.updateProductQuantityService(productId, updateProductQuantity);

        await this.updateTotalMoney(orderId);

        let foundOrder = await this.orderService.getOrderService(userId);
        res.status(201).json({
            success: true,
            message: 'change order quantity successfully',
            data: foundOrder
        })
    }


    deleteOrderDetail = async (req: Request, res: Response) => {
        let userId = req['decode'].id;
        let orderDetailId = req.params.id;
        let {productId} = req.body
        let orderDetail = await this.orderDetailService.getOrderDetailByIdService(orderDetailId);
        let orderDetailQuantity = orderDetail.quantity;
        let oldProduct = await this.productService.getOneProductById(productId);
        let updateProductQuantity = parseInt(oldProduct.quantity) + parseInt(orderDetailQuantity);

        await this.productService.updateProductQuantityService(productId, updateProductQuantity);

        let totalPrice = orderDetail.price * orderDetail.quantity;
        let foundOrder = await this.orderService.getOrderService(userId);
        let totalMoney = foundOrder.totalMoney;
        let updateTotalMoney = totalMoney - totalPrice;
        await this.orderService.updateOrderTotalMoney(foundOrder.id, updateTotalMoney);

        await this.orderDetailService.deleteOrderDetailService(orderDetailId);

        let foundUpdatedOrder = await this.orderService.getOrderService(userId);
        res.status(201).json({
            success: true,
            message: 'delete order successfully',
            data: foundUpdatedOrder
        })
    }


    checkOut = async (req: Request, res: Response) => {
        let userId = req['decode'].id;
        res.status(201).json({
            success: true,
            message: 'get order successfully'
        })
    }
}
export default new orderController();