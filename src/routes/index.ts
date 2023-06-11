import { Router } from "express";
import v1 from './api/v1'

const router: Router = Router()

/**
 * Route /api/v1/
 * v1 routes directory
 */
router.use('/api/v1', v1);

export default router;