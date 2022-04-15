
const Book = require('../model/book');
getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll())

}
getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.id));

}
save = (req, res, next) => {
    const boo = req.body;
    const savedBoo = new Book(null, boo.title, boo.ISBN, boo.publishedDate,boo.author).save();
    res.status(201).json(savedBoo);
}
update = (req, res, next) => {
    const boo = req.body;
    const updateBoo = new Book(req.params.id, boo.title, boo.ISBN, boo.publishedDate,boo.author).update();
    res.status(200).json(updateBoo);

}
deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(200).end();
}
module.exports = {
    getBooks,
    getBookById,
    save,
    update,
    deleteById

}