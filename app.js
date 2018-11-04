var express = require("express"),
    app     = express();
    
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("basic");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has been started.");
})