//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    var day = now.getDay();
    res.render('list', {DAY:days[day], DAYNO:day});
});




app.listen(3000, function(){
    console.log("Server started at port 3000");
});
