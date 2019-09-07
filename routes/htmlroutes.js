var path = require("path");

function htmlroutes(app){

    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../index.html"));
    });
}

module.exports=htmlroutes