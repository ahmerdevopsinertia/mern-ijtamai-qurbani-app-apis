const express = require('express');

const router = express.Router({ mergeParams: true });

// const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

router
    .route('/')
    .get((req, res) => { console.log(`Health is okay !!!`); res.end('Health is Okay !!!') })

module.exports = router;
