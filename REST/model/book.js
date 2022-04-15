let books = [
    { id:1, title:'title1', ISBN:"1313131313", publishedDate:'pub1', author:'auth1'},
    { id:2, title:'title2', ISBN:"324324434", publishedDate:'pub2', author:'auth2'},
    { id:3, title:'title3', ISBN:"324234211", publishedDate:'pub3', author:'auth3'}
];
let counter=3;
module.exports = class Book {
    constructor( id, title, ISBN, publishedDate, author) {
       this.id= id;
       this.title=title;
       this.ISBN=ISBN;
       this.publishedDate=publishedDate;
       this.author=author;
    }
    save() {
        counter++;
            this.id=counter;
         
        books.push(this);
        
        return this;
    }
    update() {
        const index = books.findIndex(p => p.id == this.id);
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
        const index = books.findIndex(t=>t.id==bookId);
        if (index>-1){
            return books[index];
        }
        else{
            throw new Error('NOT FOUND');
        }
    }
    static deleteById(bookId){
        const index = books.findIndex(p=>p.id==bookId);
        if(index >-1){
            books = books.filter(p=>p.id!=bookId);
        }
        else{
        throw new Error('cant find a product');    
        }
    }
}

