const express = require('express');

const router = express.Router({ mergeParams: true });

// const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

router
    .route('/')
    .get((req, res) => { console.log(`Hello World !!!}`); res.end('Hello World !!!') })

module.exports = router;
