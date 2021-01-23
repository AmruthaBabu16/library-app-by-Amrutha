const express =require("express");
const authorRouter=express.Router();
function router(nav){
    var authors=[
        {
           
            title:'Joseph Barbera',
            img:'joseph.jpg'
        },
        {
           
            title:'J K Rowling',
            img:'jk.jpg'
        },
        {
            
            title:'Basheer',
            img:'basheer.jpg'
        }
    ]
    authorRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Authors',
            authors
        });
    });
    authorRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id]
        })
    })
    return authorRouter;
}
module.exports=router;