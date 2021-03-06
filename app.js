//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.set("view engine", "ejs");

const items = ["Egg", "Chicken", "Onion", "Butter"]; // Initiates the list with these elements(in html page), Then more elements can be added
//  Since items is outside any scope it is global variable. It can be accessed any where.
// And it executes even before calling any function.
const workItems = ["Check Mail"];

const colors = ["RebeccaPurple", "MediumSpringGreen", "OldLace", "LightSalmon", "Indigo", "DimGrey", "Chocolate"];
let pickedColors = []
function pickColor() {
    let randNo = Math.floor(Math.random()*colors.length);
    if (pickedColors.includes(colors[randNo])){
        pickColor();
    } else {
    pickedColors.push(colors[randNo]);
    return colors[randNo];
    }
}

const homeColor = pickColor();
const workColor = pickColor();

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render('list', {
        DAY: day,
        ITEM: items,
        CATEG: "Home",
        COLOR: homeColor
    });
});


app.get("/work", function (req, res) {
    let day = date.getDate();
    res.render('list', {
        DAY: day,
        ITEM: workItems,
        CATEG: "Work",
        COLOR: workColor
    });
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.post("/", function (req, res) {
    let listInput = req.body.newItem;
    if (listInput === "") {
        // Alert
    } else {
        if (req.body.list === "Work") {
            workItems.push(listInput);
            res.redirect("/work");
        } else {
            items.push(listInput);
            res.redirect("/"); // It redirect to home route, There the page refresh with the new item element. Since the new iteme element is in the array now.
        }
    }
});

app.post("/delete", function (req, res) {
    let delIndx = req.query.index;
    let delCategory = req.query.category;
    if (delCategory === "Work") {
        workItems.splice(delIndx, 1);
    } else {
        items.splice(delIndx, 1);
    }
    res.sendStatus(200);  // A ajex request canno't redireect an page. So just sending an response.
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});