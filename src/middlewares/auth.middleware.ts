import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../configs/app.config";

/**
 * Auth middleware
 * Checking authorization header has valid bear token
 */
const auth = async (req: Request, res: Response, next: NextFunction) => {
    // Get authorization token
    const { authorization } = req.headers;

    // Check athorization header not empty
    if (!authorization) {
        // If authorization header empty
        res.status(403).json({
            status: 403,
            message: "Authorization not found",
        });
    }

    // Extract token from authorization header
    const token = authorization?.split(" ")[1];

    try {
        // Verify token is valid
        await jwt.verify(`${token}`, SECRET_KEY);
        return next();
    } catch (error) {
        // Return if token invalid
        return res.status(403).json({
            status: 403,
            message: "Invalid token",
        });
    }
};

export { auth };
