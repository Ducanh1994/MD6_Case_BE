import {Router} from "express";
import categoryController from "../controller/categoryController";

const categoryRouter = Router();
categoryRouter.get('/', categoryController.findAll);
categoryRouter.get('/:id', categoryController.findById);





export default categoryRouter