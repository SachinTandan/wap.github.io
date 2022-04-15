const express = require('express');






const app = express();
// app.use((req, res, next) => {
//     console.log('This middleware always run!');
//     next();
// });
app.set('port', process.env.PORT || 3000);
const port = app.get('port');
app.listen(port, () => {
    console.log('this port is live...');
});

app.use(express.urlencoded({  //body extract garxa from submit button

    extended: true
}));



app.get('/add-product', (req, res, next) => {

    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>Demo</title>
</head>
<body>
    <form action="/product" method="post">
    <label for="text">Enter the title</label> <input type="text" name="title"> <br>
        <input type="submit" value="submit">
    </form>
</body>
</html>
    `
    res.send(html);
});
app.all('/product', (req,res,next)=>{
console.log(req.body);
// res.send("<h1> entry complete<h1/>");
res.send('<h1> Thanks for the data<h1/>')
});
// app.use('/practice', (req, res, next) => {
//     console.log("this is a practice console..")
//     res.send('<h1>practice ho </h1>');
// });
// app.use('/', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express Again</h1>');
// });
// app.use('/posts', (req, res) => {
//     let data = [{
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi"
//     }
//     ];
//     res.json(200, data);
// });
