import express from 'express';

const router = express.Router({ mergeParams: true });

// const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

router
    .route('/health/check')
    .get(async (req, res) => {
        console.log(`Health is okay !!!`);
        res.end('Health is Okay !!!')
    });

export default router;
