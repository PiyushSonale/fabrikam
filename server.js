
var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>219199_Piyush_Sonale<h1/> "+
    "<h1>FabriKam Pvt. Ltd</h1>"
    +
              "<hr/>"+
              "<ol>"+
                    " <li>The FabriKam Corporation is a multinational business with its headquarters in Paris</li>"+
                    " <li>This multinational company has their 24 Offices all over world.</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
