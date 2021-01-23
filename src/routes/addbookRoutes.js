const express =require("express");

const addbookRouter=express.Router();
function router(nav){
    addbookRouter.get('/',function(req,res){
        res.render("addbook",{
            nav,
            title:'Library'
        });
    });      
    addbookRouter.post('/add',function(req,res){  
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
    },
   {
    title:req.body.title,
     author:req.body.author,
    genre:req.body.genre,
      img:req.body.img
    }               
     ]
    res.render("addedbook",{
    nav,
    title:'Library',
    books
          })
        
        })  
    return addbookRouter;
}
module.exports=router;