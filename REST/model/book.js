let books = [
    { bookId:1, title:'title1', ISBN:"1313131313", publishedDate:'pub1',
     author: {
         authorId:304,
         firdtName:'John',
         lastName:'Smith'
    }},
    { bookId:2, title:'title2', ISBN:"324324434", publishedDate:'pub2', 
    author: {
        authorId:308,
        firdtName:'Edward',
        lastName:'Jack'
    }},
    { bookId:3, title:'title3', ISBN:"324234211", publishedDate:'pub3',
    author: {
        authorId:309,
        firdtName:'Sachin',
        lastName:'Tandan'
    }}
];
let counter=3;
module.exports = class Book {
    constructor( id, title, ISBN, publishedDate, author) {
       this.bookId= id;
       this.title=title;
       this.ISBN=ISBN;
       this.publishedDate=publishedDate;
       this.author=author;
    }
    save() {
        counter++;
            this.bookId=counter;
         
        books.push(this);
        
        return this;
    }
    update() {
        const index = books.findIndex(p => p.bookId == this.bookId);
        if (index > -1) {
            books.splice(index, 1,this);
            return this;
        } else {
            throw new Error('NOT Found');
        }
    }
    static fetchAll(){
        return books;
    }
    static findById(bookId){
        const index = books.findIndex(t=>t.bookId==bookId);
        if (index>-1){
            return books[index];
        }
        else{
            throw new Error('NOT FOUND');
        }
    }
    static deleteById(bookId){
        const index = books.findIndex(p=>p.bookId==bookId);
        if(index >-1){
            books = books.filter(p=>p.bookId!=bookId);
        }
        else{
        throw new Error('cant find a product');    
        }
    }
}

