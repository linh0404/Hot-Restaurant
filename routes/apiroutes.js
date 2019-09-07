
var customers=require("./customer");
var path = require("path");

function apiroutes(app){
    app.post("api/reserve",function(req,res){
        var newcustomer=req.body
        console.log(newcustomer);
        customers.push(newcustomer);
        });
    

    
}


module.exports=apiroutes