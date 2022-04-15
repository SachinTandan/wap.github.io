// //creating the object i js
// let person={
// first_name: 'sachion',
// last_name:'Tandan',
// //method 
// getFunction: function(){
// return ('this is a has : ${person.first_name} and ${person.last_name}');
// },
// //creating the object within the object
// phone_number:{
// mobile:'1343141',
// landline:'14124'
// }
// }
// console.log(person);
// console.log(person.phone_number.landline);
// console.log("*********************");
// for(t in person){
// console.log(person[t]);
// }

//arrayes are initialized like : let numberArray=[];
// const p={x:1,y:10};
// console.log(p.x);
// p.x=20;
// console.log(p.x);
// console.log("o5"==5); false
// console.log("5"==5); //true
// console.log("5.0"==5); //true
///=== checks datatype and value

// const x = {
//     'a': 97,
//     'b': 98,
//     'c': 99,
//     'd': 199,
//     'mult': function(a, b) {
//         console.log("this is inside a fucntion");
//     return a * b;
//     }
//     };
//     console.log(x);
//     console.log(x.mult(1,2));
// javascript code demonstrating a simple object
// let school = {
// 	name: 'Vivekananda School',
// 	location : 'Delhi',
// 	established : '1971',
// 	displayInfo : function(){
// 		console.log(`${school.name} was established
// 			in ${school.established} at ${school.location}`);
// 	}
// }
// school.displayInfo();
//creating the object using the constructor
//creating the constructor
// function person(first_name,last_name){
//     this.first_name=first_name;
//     this.last_name=last_name;
//     }
//     //creating new instance of the person object
//     let person1= new person();
// let college = {
//     'name': 'new horizon',
//     'location': 'Butwal-13',
//     f: function () {
//         console.log(' college is ${college.name}' + college.name + ' and location is' + college.location);
//     }
// }


// college.f();
// let school = {
//     name: 'Vivekananda School',
//     location : 'Delhi',
//     established : '1971',
//     sachin : 1000,
//     displayInfo : function(){
//         console.log(`The value of the key sachin is ${school.sachin}`);
//     }
// }
// school.displayInfo();   
// bracket notation
// let school = {
// 	name: 'Vivekananda School',
// 	displayInfo : function(){
// 		return school.name.split(' ');
// 	}
// }
//  // Vivekananda
// console.log(school.displayInfo());

// function sc(){
//     console.log('casc');

// }
// console.log(sc());

// let s = {
//     ss:'sac',
//     ff:function(){
//         console.log('sca')
//     }
// }
// console.log(s.ff());
//exam question
function b(num) {
    let y = 10;
    function a() {
        console.log(x);
    }
    x = y + num;
    a();

}
const x = 15;
b(3);
