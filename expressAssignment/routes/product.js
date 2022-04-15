const express = require('express');
const path = require('path');
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
router.get('/add-product', (req, res, next) => {

    res.sendFile(path.join(__dirname,'..','views','products.html'));
});
router.get('/', (req,res,next)=>{
    res.send('<h1> data entry complete<h1/>');
  })
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  
});

module.exports = router;
