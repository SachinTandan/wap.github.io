//import-work
const express = require("express");
const path = require('path');
const productRouter = require('./routes/product');
const users = require('./routes/users');


const app = express();
app.set('port', process.env.PORT || 3000);
const port = app.get('port');
app.listen(port, () => {
    console.log('port is live...');
})
//config
app.use('/mycss',express.static(path.join(__dirname,'public','css')));

//real work

app.use(express.urlencoded({ extended: true }));  //body extraction
app.use(productRouter);    //routing the prodcut page

app.use(users);   //routing to the admin page

app.use((req,res,next)=>{  //for error handling
    throw new ("error");
})

app.use((err,req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, 'views', '404error.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});