import  express  from "express";
import { getAllUsers, signup } from "../controller/user-controller";

const router = express.Router();

router.get("/", getAllUsers)
router.get("/signup", signup)
export default router;