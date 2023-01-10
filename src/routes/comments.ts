import express from 'express';
import CommentController from '../controllers/comments';
import { authByToken } from '../middleware/auth';
const router = express.Router();

router.get('/:slug/comments', CommentController.getAllComments); //Get the comments for an article.
router.post('/:slug/comments', authByToken, CommentController.postNewComment); //Create a comment for an article.
router.delete('/:slug/comments/:id', authByToken, CommentController.deleteComment); //Delete a comment for an article.

export default router;
