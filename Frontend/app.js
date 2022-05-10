const express = require("express");
const path = require("path");
const axios = require("axios");

const PORT = process.env.PORT || 1000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    res.render("home", {
        title: "Admission KMITL",
        data: "test",
    });
});

app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log("Running on PORT:" + PORT);
});