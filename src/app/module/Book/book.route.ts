import express from 'express';
import { BookController } from './book.controler';

const router = express.Router();

router.post('/create-bookInfo', BookController.createBook);
router.get('/', BookController.getBook);
router.get('/:productId', BookController.getOneBook);
router.put('/:productId', BookController.getUpdatedBook);
router.delete('/:productId', BookController.deletedBookData);

export const BookRoute = router;
