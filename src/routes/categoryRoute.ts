import { Router } from "express";
import { getAllCategory } from "../controllers/category";

const router = Router();

router.get("/" , getAllCategory)

export default router;