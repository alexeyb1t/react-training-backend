import {booksController} from '../controllers/books-controller';
import * as express from 'express';

const router = express.Router();

router.get('/get-books', booksController.getBooks);
router.post('/create-book', booksController.createBook);
router.post('/update-book/:id', booksController.uploadBook);

export = router;