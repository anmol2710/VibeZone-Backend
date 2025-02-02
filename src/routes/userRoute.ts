import { Router } from "express";
import { loginorSignup, getUser } from "../controllers/user";

const router = Router();

router.post("/signin", loginorSignup)
router.post("/me", getUser)

export default router;