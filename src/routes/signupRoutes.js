const express =require("express");
const signupRouter=express.Router();   
function router(nav){ 
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:"Sign Up"
            
        });
    });  
    signupRouter.post('/submit',function(req,res){
         res.redirect('/signin')
    })
    return signupRouter;
}
module.exports=router;