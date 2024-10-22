import express from "express";
import { clerkwebhooks, userCredits } from "../controllers/UserControler.js";
import authUser from "../middlewares/auth.js";

const userRouter = express.Router()

userRouter.post('/webhooks',clerkwebhooks)
userRouter.get('/credits',authUser,userCredits)

export default userRouter