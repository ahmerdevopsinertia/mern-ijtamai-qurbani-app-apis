
import asyncHandler from 'express-async-handler';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

const getUser = asyncHandler(async (req: any, res: any, next: any) => {
  res.end('getUser');
});

const createUser = asyncHandler(async (req: any, res: any, next: any) => {
  const userRepo = getRepository(User);
  const userRecord = userRepo.create({
    firstName: "John",
    lastName: "Doe",
    age: 22,
  });
  const result = await userRepo.save(userRecord)
    .catch((err) => {
      return next(err);
    });

  if (result != undefined) {
    res.end('New User Saved');
  }
});

export {
  getUser,
  createUser,
};