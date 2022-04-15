// // // // let p = 'hello';
// // // // // console.log(fisrtName);
// // // // if(true){
// // // // let fisrtName= 'john';
// // // // console.log(this.fisrtName+this.p);
// // // // }
// // // // foo();
// // // // function foo(){
// // // //     var lastName='xing';
// // // //     if(p){
// // // // lastName = 'jack';
// // // // console.log(this.p+this.fisrtName);
// // // //     }
// // // // }
// // // //************************** */
// // // let aa=[];
// // // for (let i = 0; i < 5; i++) {
// // //     // Each loop has its own Lexical Environment
// // //     // {i: value}
// // //     // let j = 0;
// // //     // console.log(i);
// // //     aa.push(()=>{
// // //     console.log(i);
// // //     })
// // //     }
// // //     aa.forEach()

// //  function printNumber(from,to){
// // while(from<=to){
// //     console.log(from)
// //     from++;
// // }
// //  }
// //  printNumber(1,5);
// const students = [
//   { name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
//   { name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
//   { name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
//   { name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
//   { name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
// ];
// let a =[];
//  a = students.filter(function(s){
// return s.courses.includes('cs303');

// });
// console.log(a);
// console.log(a.length);
// // let avg=0;
// const gradeMap = a.map(function(v){
// return v.grade;
// });
// const total = gradeMap.reduce(function(acc,item){
//     acc+=item;
//     return acc;
// },0);
// console.log('AVERAGE is =>'+total/a.length);
// const user = {
//   salute: ""
//   ,
//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = (salutej) => this.salute = salutej;
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//   }
// };
// user.greet();
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function() {
//   this.students.forEach((student)=>
//   // error – ‘this’ is undefined (or window)
//   console.log(this.title + ": " + student)
//   )
//   }
//   };
//   group.showList();

// animal has methods

// let animal = {
//   walk: function() {
//   if (!this.isSleeping) {
//   alert(`I walk`);
//   }
//   },
//   sleep: function() {
//   this.isSleeping = true;
//   }
//   }; 
//   let rabbit = Object.create(animal);
//   let hobit = Object .create(animal);
//   hobit.name="j rakhda ni hunxa"
//   rabbit.name = "White Rabbit";
//   rabbit.sleep();
//   console.log(rabbit.isSleeping);
//   console.log(rabbit)
//   hobit.sleep();
//   console.log(hobit)

// function User(name){
//   this.name= name;

//   this.isAdmin= false;

// }


// let user = new User("Sachin");

// console.log(user);
// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { console.log(this.name) }
//   }
//   // proof: User is a function
//   // alert(typeof User); // function
//   // Usage:
//   let user = new User("John");
//   user.sayHi();
// class User {
//   constructor(name = "Anonymous") {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }
// fred = new User();
// console.log(fred);
// console.log(fred.__proto__);
// console.log(User.prototype);
// fred.sayHi();
// bob = new User("Bob");
// console.log(bob);
// bob.sayHi();

let vv = ["43","334","434","3434"];
let v = vv.map(function(s){
  let res ="";
for (let index = 0; index < s.length; index++) {
    res= s.charAt(index)+res;
    
  }
  return res;
})

console.log(v);