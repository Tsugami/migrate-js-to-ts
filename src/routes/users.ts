import express from 'express';
import UserController from '../controllers/users';
import { authByToken } from '../middleware/auth';

const router = express.Router();

router.post('/users', UserController.createUser); //Register a new user
router.post('/users/login', UserController.loginUser); //Login for existing user
router.get('/user', authByToken, UserController.getUserByEmail); //Gets the currently logged-in user
router.patch('/user', authByToken, UserController.updateUserDetails); //Updated user information for current user

export default router;
