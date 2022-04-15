const express = require('express');
const path = require('path');

let option = {
    "caseSensitive": false,
    "strict": false

}
const router = express.Router(option);

router.get('/users', (req, res, next) => {
   
    res.sendFile(path.join(__dirname,'..','views','user.html'));
    
});
router.post('/userList', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  
});

module.exports= router;