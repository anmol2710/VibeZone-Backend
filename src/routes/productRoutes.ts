import { Router } from "express";
import { getAllProducts, getProductById, getFeaturedProducts } from "../controllers/product";

const router = Router();

router.get("/category/:categoryId", getAllProducts)
router.get("/featured", getFeaturedProducts)
router.get("/:productId", getProductById)

export default router;