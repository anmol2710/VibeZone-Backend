import { Router } from "express";
import { getCart , addToCart , removeFromCart } from "../controllers/cart";

const router = Router();

router.post("/", getCart)
router.post("/add", addToCart)
router.post("/remove", removeFromCart)

export default router;