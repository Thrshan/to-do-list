//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var items = ["Egg", "Chicken", "Onion", "Butter"]; // Initiates the list with these elements(in html page), Then more elements can be added
//  Since items is outside any scope it is global variable. It can be accessed any where.
// And it executes even before calling any function.

app.get("/", function(req, res){
    var options = {weekday: "long", year: "numeric", month: "short", day: "numeric" };
    const now = new Date();
    // var day = new Intl.DateTimeFormat("US-EN", options).format(now); // Another way of formating date, The result will be the same.
    var day = now.toLocaleDateString("US-EN", options);
    res.render('list', {DAY:day, ITEM:items});
});

app.post("/", function(req, res){
    var listInput = req.body.newItem;
    items.push(listInput);
    res.redirect("/");  // It redirect to home route, There the page refresh with the new item element. Since the new iteme element is in the array now.
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
});
