const express = require('express');
const bookController = require('../controller/bookController');

const router = express.Router();
// router.get('/', bookController.getName); //read
router.get('/',bookController.getBooks)
router.get('/:id', bookController.getBookById);  //read

router.post('/', bookController.save);  //create
router.put('/:id', bookController.update);//update
router.delete('/:id',bookController.deleteById); //delete
module.exports = router;