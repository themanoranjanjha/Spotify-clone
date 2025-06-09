import { Router } from "express";
import { createSong } from "../controller/admin.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", getAdmin);
router.get("/users", protectRoute, createSong);

export default router;