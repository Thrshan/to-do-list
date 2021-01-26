//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.set("view engine", "ejs");

let items = ["Egg", "Chicken", "Onion", "Butter"]; // Initiates the list with these elements(in html page), Then more elements can be added
//  Since items is outside any scope it is global variable. It can be accessed any where.
// And it executes even before calling any function.

app.get("/", function (req, res) {
    let options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    const now = new Date();
    // let day = new Intl.DateTimeFormat("US-EN", options).format(now); // Another way of formating date, The result will be the same.
    let day = now.toLocaleDateString("US-EN", options);
    res.render('list', {
        DAY: day,
        ITEM: items
    });
});

app.post("/", function (req, res) {
    let listInput = req.body.newItem;
    if (listInput === "") {
        // Alert
    } else {
        items.push(listInput);
    }
    res.redirect("/"); // It redirect to home route, There the page refresh with the new item element. Since the new iteme element is in the array now.
});

app.post("/clear", function (req, res) {
    items.pop();
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});