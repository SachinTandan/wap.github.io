const expres = require("express");

const  app= expres(); 

console.log(process.env.PORT);

app.set('port', process.env.PORT || 3000);
let port = app.get('port');

app.use((req,res,next)=>{
    console.log('inside the first middleware');
    // res.send('hi , you can see me ');  //send means my connections ends..
     next(); 
})
app.use('/user',(req,res,next)=>{
res.send('user being called ...')
})





app.listen(port, ()=>{
    console.log('listening to ....'+port);
})
