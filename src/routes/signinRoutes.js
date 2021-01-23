const express =require("express");
const signinRouter=express.Router(); 
function router(nav){ 
    signinRouter.get('/',function(req,res){
        res.render("signin",{
            nav,
            title:"Sign In"
            
        });
    });
    signinRouter.post('/submit',function(req,res){
         res.redirect('/books')
    }) 
  return signinRouter;
}
module.exports=router;