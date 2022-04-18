
const Book = require('../model/book');
getName = (req, res, next) => {
    let paramName = new URLSearchParams(req.query);
    console.log(paramName);
    let isValid = false;
    for (let x of paramName.keys()) {
        if (x === 'firstName') {
            isValid = true;
            break;
        }
    }
    if (isValid) {
        let firstName = paramName.get('firstName');
        res.status(200).json(Book.fetchAll().filter(x => x.author.firdtName.toUpperCase().includes(firstName.toUpperCase())).map(x=>x.title));
    }
    else {
       throw new Error('NOT FOUND')
    }

}
getBooks= function(req,res,next){
res.status(200).Book.fetchAll();
}
getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.id));

}

save = (req, res, next) => {
    const boo = req.body;
    const savedBoo = new Book(null, boo.title, boo.ISBN, boo.publishedDate, boo.author).save();
    res.status(201).json(savedBoo);
}
update = (req, res, next) => {
    const boo = req.body;
    const updateBoo = new Book(req.params.id, boo.title, boo.ISBN, boo.publishedDate, boo.author).update();
    res.status(200).json(updateBoo);

}
deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(200).end();
}
module.exports = {
    getBooks,
    getName,
    getBookById,
    save,
    update,
    deleteById

}