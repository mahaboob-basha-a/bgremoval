import express from "express";
import { clerkwebhooks } from "../controllers/UserControler.js";

const userRouter = express.Router()

userRouter.post('/webhooks',clerkwebhooks)

export default userRouter