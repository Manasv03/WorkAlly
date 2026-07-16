import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { clocInkOut, getAttendance } from "../controllers/attendanceController.js";

const attendanceRouter = Router();

attendanceRouter.post('/', protect, clocInkOut)
attendanceRouter.post('/', protect, getAttendance)

export default attendanceRouter;