import { Router } from "express";
import { getAllProducts, getProductById, getFeaturedProducts, searchProducts } from "../controllers/product";

const router = Router();

router.get("/search/:productName", searchProducts)
router.get("/category/:categoryId", getAllProducts)
router.get("/featured", getFeaturedProducts)
router.get("/:productId", getProductById)

export default router;