import express from 'express';
import FavoriteController from '../controllers/favourites';
import { authByToken } from '../middleware/auth';

const router = express.Router();

router.post('/:slug/favorite', authByToken, FavoriteController.addFavourite); //Favorite an article
router.delete('/:slug/favorite', authByToken, FavoriteController.removeFavourite); //Unfavorite an article

export default router;
