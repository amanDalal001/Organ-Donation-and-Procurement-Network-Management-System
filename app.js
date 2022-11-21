const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = 3000;

const Users = [{
    username: "aman",
    password: "aman123"
}]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

// app.post('/', (req, res) => {
//     const body = req.body;
//     const username  = body.username;
//     const password = body.password;

    
//     console.log(username+" "+ password);
// });

app.get('/login',(req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/login',(req, res)=>{
    const body = req.body;
    const username  = body.username;
    const password = body.password;

    Users.forEach((user)=>{
        if(user.username == username && user.password == password)
        {
            res.redirect('/login');
        }
    } )
    console.log(username+" "+ password);
});

app.get('/home',(req,res)=>{
    
})

app.listen(port);
