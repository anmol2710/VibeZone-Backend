import { Router } from "express";
import { createOrder, createTransaction, getOrders } from "../controllers/order";

const router = Router();

router.post("/transaction", createTransaction)
router.post("/", createOrder)
router.post("/get", getOrders)

export default router;