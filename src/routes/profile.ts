import express from 'express';
import ProfileRouter from '../controllers/profile';
import { authByToken } from '../middleware/auth';

const router = express.Router();

router.get('/:username', authByToken, ProfileRouter.getFollowers); //Get a profile of a user of the system
router.post('/:username/follow', authByToken, ProfileRouter.follow); //Follow a user by username
router.delete('/:username/follow', authByToken, ProfileRouter.unfollow); //Unfollow a user by username

export default router;
