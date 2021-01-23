const express =require("express");
const bookRouter=express.Router();
function router(nav){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'tom.jpg'
        },
        {
            title:'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:'harry.jpg'
        },
        {
            title:'Pathumede aadu',
            author:'Basheer',
            genre:'Drama',
            img:'aadu.jpg'
        }
    ]
    bookRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
            
        });
    });
    bookRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render('book',{
            nav,
            title:'Library',
          book:books[id]
        })
    })
    return bookRouter;
}
module.exports=router;