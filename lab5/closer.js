// // function greeting(){
// // let message = 'hi'
// // function sayHi(){
// //     console.log(message);
// // }

// // return sayHi();
// // }
// //  let hi =greeting();
// // let user = {
// //     firsName: 'cacc',
// //     sayHi: function () {
// //         console.log('hello ' + this.firsName);
// //     }
// // };
// // // user.sayHi();
// // setTimeout(function () {
// //     user.sayHi();
// // },200 );
// // // console.log('*****************');
// // setTimeout(user.sayHi,200);
// // // console.log('*****************');
// // setTimeout(() => {
// //     user.sayHi.apply(user);
// // }, 200);
// // // console.log('*****************');
// // setTimeout(user.sayHi.bind(user), 200);
// // // console.log('*****************');
// // setTimeout(function () {
// //     user.sayHi.call(user);
// // }, 200);
// const me = {
//     fisrtName:'John',
//     lastName:'Snow',
//     getFullName:function(){
//  return this.fisrtName+" "+this.lastName;
//     }
// }
// const log=function(height,weight){
// console.log(this.getFullName()+" :"+height+" "+ weight);
// }
// // log.apply(me, ['180cm', '70kg']); 
// // log.call(me,'12','323');
// // log.bind(me,12,133)();
// let cc = log.bind(me);
// console.log(cc(34,4646));
// v
// function greeting(message){
//     return function(name){
// return message+ name;
//     };
// }
// var sayHi= greeting("Hi ");
// var sayHello= greeting('hello ');
// // console.log(greeting('hi '));
// console.log(sayHi('Sachin'));
// console.log(sayHello('Tandan'));
// for (var index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
// }
// for (var index = 1; index <= 3; index++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log('after ' + index + ' second(s):' + index);
//         }, index * 1000);
//     })(index);
// }
// for(let index=1;index<=3;index++){
//     setTimeout(function(){
//         console.log('afetr'+index+'second(s)'+index);
//     },index*1000);
// }
// const user = {
//     salute: ""
//     ,
//     greet: function() {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function(newSalute) { //inner function
//     this.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//     }
//     };
//     user.greet(); //Hello Hello ?
// const user = {
//     salute: "",
//     greet: function() {
//     const self = this;
//     self.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function(newSalute) { //inner function
//     self.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour
//     }
//     };
//     user.greet(); //Hello Bonjour
// const user = {
//     salute: "",
//     greet: function() {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     setFrench = newSalute => this.salute = newSalute;
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour
//     }
//     };
//     user.greet(); //Hello Bonjour
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//     this.students.forEach(function(student) {
//     // error – ‘this’ is undefined (or window)
//     console.log(this.title + ": " + student);
//     });
//     }
//     };
//     group.showList();
// let x= 1;
// function foo(y){
// return function(z){
//     return x+y+z;
// }
// }
// let  f = foo(2);
// console.log(f(2));