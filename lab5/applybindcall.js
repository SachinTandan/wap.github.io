// // var obj ={num:12};
// // var addToThis = function(a){
// //     return this.num + a
// // }

// // console.log(addToThis.call(obj,' twelve'));
// // var arr = [' 34'];
// // console.log(addToThis.apply(obj,arr));

// // var fn = addToThis.bind(obj);
// // console.log(fn(' 55'));
// // function b() {

// //     const x = 10;

// //     a(50);

// //     function a(x) {

// //         console.log(x);

// //     }

// // }

// // var x = 20;

// // b();
// function sum(x, y, ...more) {
//     //"more" is array of all extra passed params
//     let total = x + y;
//     if (more.length > 0) {
//     for (let i = 0; i < more.length; i++) {
//     total += more[i];
//     }
//     }
//     console.log("Total: " + total);
//     return total;
//     }
//     sum(5, 5, 5);
//     sum(6, 6, 6, 6, 6);
const user = {
    salute: ""
    ,
    greet: function () {
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = function (newSalute) { //inner function
            this.salute = newSalute;
        };
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour??
    }
};