const express = require('express');
const bookRouter= require('./routes/bookRoute');
const app = express();

app.use(express.json());   // response is in json format
app.use('/books',bookRouter);


app.use((req,res,next)=>{

    res.status(404).json({error: req.url+ 'API not supported'});

});

app.use((err,req,res,next)=>{

    if(err.message==='NOT Found'){
        res.status(404).json({error:err.message})
    }
    else{
        res.status(500).json({error:'Something is wrong! Try later'});
    }
});

app.listen(2000, () => console.log('listening to 2000...'));
