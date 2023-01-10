import express from 'express';
import TagController from '../controllers/tags';
const router = express.Router();

router.get('/', TagController.getAllTags); //Get all tags

module.exports = router;
