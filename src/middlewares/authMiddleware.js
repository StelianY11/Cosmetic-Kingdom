import * as autService from "../services/auth.js";

export function authMiddleware(ctx, next) {
    ctx.authData = autService.getAuthData();
    next();
};