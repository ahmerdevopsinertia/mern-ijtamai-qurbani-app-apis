import express from 'express';

// import { logUuid } from 'middlewares/logUuid';
import healthCheck from './HealthCheck';
import user from './User';

const router = express.Router();

// LogUuid
// router.use(logUuid);

// Health Check
router.use(healthCheck);

// User
router.use(user);

export default router;
