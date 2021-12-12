import { getRepository } from "typeorm";
import { User } from "../../../entity/User";

import express from 'express';

const router = express.Router({ mergeParams: true });

// const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

router
    .route('/user')
    .post(async (req, res) => {
        const userRepo = getRepository(User);
        const userRecord = userRepo.create({
            firstName: "John",
            lastName: "Doe",
            age: 22,
        });
        await userRepo.save(userRecord).catch((err) => {
            console.log("Error: ", err);
        });
        console.log("New User Saved", userRecord);
        res.end('New User Saved');
    });

export default router;
