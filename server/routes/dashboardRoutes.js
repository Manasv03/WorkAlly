import { Router } from "express"
import { protect } from "../middleware/auth.js"
import { gatDashboard } from "../controllers/dashboardController.js"

const dashboardRouter = Router()

dashboardRouter.get('/', protect, gatDashboard)

export default dashboardRouter;