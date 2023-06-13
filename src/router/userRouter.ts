import {Router} from "express";
import UserController from "../controller/userController";
import userController from "../controller/userController";

export const userRouter = Router();

userRouter.post('/login', userController.login);