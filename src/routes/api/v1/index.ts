import { Request, Response, Router } from "express";

const router = Router()

/**
 * Get /api/v1
 */
router.route('/').get((req: Request, res: Response) => {
    res.send('Hello world')
})


export default router;