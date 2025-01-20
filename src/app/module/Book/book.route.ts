import express from 'express';
import { BookController } from './book.controler';

const router = express.Router();

router.post('/products', BookController.createBook);
router.get('/products', BookController.getBook);
router.get('/products/:productId', BookController.getOneBook);
router.put('/products/:productId', BookController.getUpdatedBook);
router.delete('/products/:productId', BookController.deletedBookData);

export const BookRoute = router;
