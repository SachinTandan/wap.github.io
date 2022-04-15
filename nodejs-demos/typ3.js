class Person{
    constructor(name){
        this.name=name;
    }
    getfullName(){
        console.log(this.name);
    } 
}
module.exports= new Person('this is type3');