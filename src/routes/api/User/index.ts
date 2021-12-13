import express from 'express';
import { createUser, getUser } from '../../../controller/user';
const router = express.Router({ mergeParams: true });

// const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

router
    .route('/user')
    .post(createUser)
    .get(getUser)

export default router;
