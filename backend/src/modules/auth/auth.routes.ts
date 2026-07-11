import { Router } from "express";

import * as controller from "./auth.controller";
import authenticate from "./auth.middleware";

const router = Router();

router.post(
    "/login",
    controller.login
);

router.post(
    "/register",
    controller.register
);

router.get(
    "/me",
    authenticate,
    controller.me
);

export default router;
