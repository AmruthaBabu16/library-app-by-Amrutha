const express =require("express");
const expressValidator=require('express-validator')
const app =new express();
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/signin',name:'Sign In'
    },
    {
           link:'/signup',name:'Sign Up'
    }
];
const bookRouter=require('./src/routes/bookRoutes') (nav);
const authorRouter=require("./src/routes/authorRoutes")(nav);
const signinRouter=require("./src/routes/signinRoutes")(nav);
const signupRouter=require("./src/routes/signupRoutes")(nav);
const addbookRouter=require("./src/routes/addbookRoutes")(nav);
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',bookRouter);
app.use('/authors',authorRouter); 
app.use('/signin',signinRouter);
app.use('/addbook',addbookRouter);
app.use('/signup',signupRouter);
app.get("/",function(req,res){
    res.render("index",
    {    
        nav,
        title:'Library'
    });
});

app.listen(5000);