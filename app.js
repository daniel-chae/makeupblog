var express = require("express"),
    app     = express();
    
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("basic");
});

app.get("/blogs", function(req, res){
   res.render("index"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has been started.");
})