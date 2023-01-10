import express from 'express';

import { authByToken } from '../middleware/auth';
import ArticleController from '../controllers/articles';

const router = express.Router();

router.get('/', ArticleController.getAllArticles); //Get most recent articles from users you follow
router.get('/feed', authByToken, ArticleController.getFeed); //Get most recent articles globally
router.post('/', authByToken, ArticleController.createArticle); //Create an article
router.get('/:slug', ArticleController.getSingleArticleBySlug); //Get an article
router.patch('/:slug', authByToken, ArticleController.updateArticle); //Update an article
router.delete('/:slug', authByToken, ArticleController.deleteArticle); //Delete an article

export default router;
