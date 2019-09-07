var path = require("path");

function htmlroutes(app){

    // app.get("/",function(req,res){
    //     res.sendFile(path.join(__dirname,"../index.html"));
    // });

    app.get("/view",function(req,res){
        res.sendFile(path.join(__dirname,"../view.html"));
    });

    app.get("/reserve",function(req,res){
        res.sendFile(path.join(__dirname,"../make.html"));
    });

    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../index.html"));
    });
    app.get("/make.js",function(req,res){
        res.sendFile(path.join(__dirname,"../make.js"));
    });
}


module.exports=htmlroutes